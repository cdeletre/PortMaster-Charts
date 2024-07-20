async function fetchData() {
    try {
        const response = await fetch('datastats.json'); // Assurez-vous que le chemin est correct
        const jsonData = await response.json();

        window.portsData = jsonData.ports;
        window.statsData = jsonData.stats;

        initializeAutocomplete();
        initializeChart();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function initializeAutocomplete() {
    const titlesInput = document.getElementById('titles');
    const genresInput = document.getElementById('genres');
    const portersInput = document.getElementById('porters');

    const titleSuggestionsContainer = document.getElementById('title-suggestions');
    const genreSuggestionsContainer = document.getElementById('genre-suggestions');
    const porterSuggestionsContainer = document.getElementById('porter-suggestions');

    const titles = Object.values(window.portsData).map(port => port.attr.title);
    const genres = [...new Set(Object.values(window.portsData).flatMap(port => port.attr.genres))];
    const porters = [...new Set(Object.values(window.portsData).flatMap(port => port.attr.porter))];

    applyAutocomplete(titlesInput, titleSuggestionsContainer, titles);
    applyAutocomplete(genresInput, genreSuggestionsContainer, genres);
    applyAutocomplete(portersInput, porterSuggestionsContainer, porters);
}

function applyAutocomplete(inputElement, suggestionsContainer, suggestions) {
    inputElement.addEventListener('input', function() {
        const input = this.value.toLowerCase();
        const inputParts = input.split(',').map(part => part.trim());
        const currentInput = inputParts[inputParts.length - 1];

        suggestionsContainer.innerHTML = '';
        if (!currentInput) return;

        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(currentInput));
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('autocomplete-suggestion');
            suggestionElement.textContent = suggestion;
            suggestionElement.addEventListener('click', function() {
                inputParts[inputParts.length - 1] = suggestion;
                inputElement.value = inputParts.join(', ') + ', ';
                suggestionsContainer.innerHTML = '';
            });
            suggestionElement.addEventListener('mouseover', function() {
                clearActiveSuggestions();
                suggestionElement.classList.add('active');
            });
            suggestionsContainer.appendChild(suggestionElement);
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target !== inputElement && e.target.parentNode !== suggestionsContainer) {
            suggestionsContainer.innerHTML = '';
        }
    });

    function clearActiveSuggestions() {
        const activeSuggestions = suggestionsContainer.querySelectorAll('.active');
        activeSuggestions.forEach(el => el.classList.remove('active'));
    }
}

function initializeChart() {
    const ctx = document.getElementById('chart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Dates will go here
            datasets: [] // Data sets will go here
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        tooltipFormat: 'yyyy-MM-dd',
                    }
                },
                y: {
                    beginAtZero: true,
                    stacked: false // Initial state is not stacked
                }
            }
        }
    });
}

function updateChart(filteredPorts, filteredStats, totalDownloadsInput, stackedInput) {
    const labels = filteredStats.map(stat => stat.date);
    const datasets = filteredPorts.map(port => {
        const portTitle = window.portsData[port].attr.title;
        const data = filteredStats.map(stat => stat.ports[port] || 0);

        const randomColor = getRandomColor();
        return {
            label: portTitle,
            data: data,
            borderColor: randomColor[0],
            fill: false,
            backgroundColor: randomColor[1],
            pointRadius: 0 // Enlever les cercles
        };
    });

    const randomColor = getRandomColor();
    if (totalDownloadsInput) {
        const totalDownloadsData = filteredStats.map(stat => stat.total_downloads);
        datasets.push({
            label: 'Total Downloads',
            data: totalDownloadsData,
            borderColor: randomColor,
            fill: false,
            pointRadius: 0 // Enlever les cercles
        });
    }

    chart.data.labels = labels;
    chart.data.datasets = datasets;
    chart.options.scales.y.stacked = stackedInput; // Mettre à jour l'option stacked
    chart.update();
}

function applyFilters() {
    const titlesInput = document.getElementById('titles').value.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
    const genresInput = document.getElementById('genres').value.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
    const portersInput = document.getElementById('porters').value.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
    const readyToRunInput = document.getElementById('readyToRun').checked;
    const totalDownloadsInput = document.getElementById('totalDownloads').checked;
    const stackedInput = document.getElementById('stacked').checked;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const filteredPorts = Object.keys(window.portsData).filter(port => {
        const portData = window.portsData[port].attr;
        if (!portData) return false; // Skip if portData is undefined

        const matchesTitle = titlesInput.length === 0 || titlesInput.includes(portData.title.toLowerCase());
        const matchesGenre = genresInput.length === 0 || (portData.genres && portData.genres.some(genre => genresInput.includes(genre.toLowerCase())));
        const matchesPorter = portersInput.length === 0 || (portData.porter && portData.porter.some(porter => portersInput.includes(porter.toLowerCase())));
        const matchesReadyToRun = !readyToRunInput || portData.rtr;

        return matchesTitle && matchesGenre && matchesPorter && matchesReadyToRun;
    });

    const filteredStats = Object.values(window.statsData).filter(stat => {
        const date = new Date(stat.date);
        const isAfterStartDate = !startDate || date >= new Date(startDate);
        const isBeforeEndDate = !endDate || date <= new Date(endDate);

        return isAfterStartDate && isBeforeEndDate;
    });

    updateChart(filteredPorts, filteredStats, totalDownloadsInput, stackedInput);
}

function getRandomColor() {

    let color_rgba='';
    for (let i = 0; i < 3; i++) {
        let rnd = Math.floor(Math.random() * 256);
        color_rgba +=  rnd + ',';
    }
    return [ 'rgba(' + color_rgba + '255)', 'rgba(' + color_rgba + '0.3)' ];
}

// Fetch and initialize data
document.addEventListener('DOMContentLoaded', fetchData);