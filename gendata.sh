#!/usr/bin/env bash

REPO="${PWD}/../PortMaster-Info/"
PORT_STATS_JSON="${REPO}/port_stats.json"
PORTS_JSON="${REPO}/ports.json"


[[ "`uname`"  =~ "Darwin" ]] && DATEUTIL=`which gdate` || DATEUTIL=`which date`
TODAY_UTC=`$DATEUTIL -u "+%Y-%m-%d"`
TOMORROW_UTC=`$DATEUTIL "+%Y-%m-%d" -d "$TODAY_UTC + 1 day"`

WDIR="${PWD}/${TODAY_UTC}"
PORT_STAT_RECORDS_JSON="${WDIR}/port_stat_records.json"
INDEX_HTML="${WDIR}/index.html"
SCRIPT_JS="${WDIR}/script.js"


SINCE=${1:-"2023-08-05"}
UNTIL=${2-"$TOMORROW_UTC"}

git_main(){
    git -C "$1" checkout --quiet main 2>&1 > /dev/null
}

git_lastcommit(){
    git -C "$1" log \
        --oneline \
        --pretty=format:"%h" \
        --since="$2 00:00:00 UTC" \
        --until="$2 23:59:59 UTC" 2>&1 \
    | head -n 1
}

rm -rf "${WDIR}"
mkdir -p "${WDIR}"

echo "[" > "${PORT_STAT_RECORDS_JSON}"

git -C "${REPO}" checkout --quiet main 2>&1 > /dev/null

commitday_utc="$SINCE"
count=0
previous_commit_hash=""

while true
do
    echo -n "${commitday_utc}"

    git_main $REPO
    commit_hash=`git_lastcommit $REPO $commitday_utc`

    echo "  { \"id\": ${count},"  >> "${PORT_STAT_RECORDS_JSON}"
    echo "    \"date\": \"${commitday_utc}\","  >> "${PORT_STAT_RECORDS_JSON}"

    if [[ "$commit_hash" == "" ]]; then
        echo " copy previous data"
        git -C "${REPO}" checkout --quiet $previous_commit_hash 2>&1 >/dev/null
        echo "    \"source\": \"copy\","  >> "${PORT_STAT_RECORDS_JSON}"
    else
        previous_commit_hash="$commit_hash"
        git -C "${REPO}" checkout --quiet $commit_hash 2>&1 >/dev/null
        echo " real ($commit_hash)"
        echo "    \"source\": \"real\","  >> "${PORT_STAT_RECORDS_JSON}"
    fi

    nb_lines=`cat "${PORT_STATS_JSON}" | wc -l`

    echo "    \"stats\": {"  >> "${PORT_STAT_RECORDS_JSON}"
    echo -n "    " >> "${PORT_STAT_RECORDS_JSON}"
    cat "${PORT_STATS_JSON}" | tail -n 2 | head -n 1 >> "${PORT_STAT_RECORDS_JSON}"
    echo ","  >> "${PORT_STAT_RECORDS_JSON}"
    cat "${PORT_STATS_JSON}" | head -n `expr $nb_lines - 2` | tail -n `expr $nb_lines - 4` >> "${PORT_STAT_RECORDS_JSON}"
    echo "    }"  >> "${PORT_STAT_RECORDS_JSON}"
    echo -n "  }" >> "${PORT_STAT_RECORDS_JSON}"

    commitday_utc=`$DATEUTIL "+%Y-%m-%d" -d "$commitday_utc + 1 day"`

    # check if this is the last record
    [[ "$commitday_utc" =~ "$UNTIL" ]] && break
    echo "," >> "${PORT_STAT_RECORDS_JSON}"

done

echo -n -e "\n]\n" >> "${PORT_STAT_RECORDS_JSON}"


echo '<!DOCTYPE html>
<html>
<head>
    <title>Line Graph</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <label for="startDate">Start Date:</label>
    <input type="date" id="startDate" onchange="updateChart()">
    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" onchange="updateChart()">
    <canvas id="myChart" width="400" height="200"></canvas>' > "$INDEX_HTML"

echo -e "// script.js
let chart;
let fullData;
let labels = [];
let datasets = {};

document.addEventListener('DOMContentLoaded', function() {
    fetch('port_stat_records.json')
        .then(response => response.json())
        .then(data => {
            fullData = data;
            labels = data.map(entry => entry.date);
            datasets = {\n" >> "$SCRIPT_JS"


if [ -f $PORTS_JSON ]; then
    nb_ports=`jq -r ".ports | keys[]" $PORTS_JSON | wc -l`
else
    nb_ports=`jq -r ".ports | keys[]" $PORT_STATS_JSON | wc -l`
fi
index_port=0

while true
do
    if [ -f $PORTS_JSON ]; then
        port=`jq -r ".ports | keys[$index_port]" $PORTS_JSON`
        title=`jq -r ".ports[\"$port\"] |.attr.title" $PORTS_JSON`
        title=`echo $title | sed -e "s/'/\&lsquo;/g"`
    else
        port=`jq -r ".ports | keys[$index_port]" $PORT_STATS_JSON`
        title="$port"
    fi

    echo "<button onclick=\"toggleDataset('$port')\">Toggle $title</button>" >> "$INDEX_HTML"
    echo "                '$port': {
                    label: '$title',
                    data: data.map(entry => entry.stats['$port']),
                    borderColor: getRandomColor(),
                    fill: false
                }," >> "$SCRIPT_JS"
    
    index_port=`expr $index_port + 1`

    [ $index_port -eq $nb_ports ] && break

done

echo "<button onclick=\"toggleDataset('total_downloads')\">Toggle Total Downloads</button>" >> "$INDEX_HTML"
echo -n -e "                'total_downloads': {
                    label: 'Total Downloads',
                    data: data.map(entry => entry.stats['total_downloads']),
                    borderColor: getRandomColor(),
                    fill: false
                }" >> "$SCRIPT_JS"

echo "            };

            populateDateSelectors(labels);

            const ctx = document.getElementById('myChart').getContext('2d');
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [datasets['total_downloads']]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Value'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

function populateDateSelectors(dates) {
    const startDateSelect = document.getElementById('startDate');
    const endDateSelect = document.getElementById('endDate');

    startDateSelect.min = dates[0];
    startDateSelect.max = dates[dates.length - 1];
    endDateSelect.min = dates[0];
    endDateSelect.max = dates[dates.length - 1];

    startDateSelect.value = dates[0];
    endDateSelect.value = dates[dates.length - 1];
}

function updateChart() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const startIndex = labels.indexOf(startDate);
    const endIndex = labels.indexOf(endDate) + 1;

    const filteredLabels = labels.slice(startIndex, endIndex);
    const filteredDatasets = chart.data.datasets.map(dataset => ({
        ...dataset,
        data: dataset.data.slice(startIndex, endIndex)
    }));

    chart.data.labels = filteredLabels;
    chart.data.datasets = filteredDatasets;
    chart.update();
}

function toggleDataset(datasetKey) {
    const existingDataset = chart.data.datasets.find(dataset => dataset.label === datasets[datasetKey].label);
    if (existingDataset) {
        // Remove the dataset if it already exists
        chart.data.datasets = chart.data.datasets.filter(dataset => dataset.label !== datasets[datasetKey].label);
    } else {
        // Add the dataset if it doesn't exist
        const newDataset = {
            label: datasets[datasetKey].label,
            data: fullData.map(entry => entry.stats[datasetKey]),
            borderColor: getRandomColor(),
            fill: false
        };
        chart.data.datasets.push(newDataset);
    }
    updateChart(); // Ensure chart is updated with date filters
}

// Helper function to generate random colors for each dataset
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}" >> "$SCRIPT_JS"

echo '    <script src="script.js"></script>
</body>
</html>' >> "$INDEX_HTML"
