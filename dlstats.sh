#!/usr/bin/env bash

REPO="${PWD}/../PortMaster-Info"
PMSTATS_DIR="PMstats"

WDIR="${PWD}/${PMSTATS_DIR}"

COMMITS_JSON="$WDIR/commits.json"
REPO_PORT_STATS_JSON="${REPO}/port_stats.json"
REPO_PORTS_JSON="${REPO}/ports.json"

[[ "`uname`"  =~ "Darwin" ]] && DATEUTIL=`which gdate` || DATEUTIL=`which date`
TODAY_UTC=`$DATEUTIL -u "+%Y-%m-%d"`

SINCE=${1:-"2023-08-05"}
UNTIL=${2:-"$TODAY_UTC"}

UNTIL=`$DATEUTIL "+%Y-%m-%d" -d "$UNTIL + 1 day"`

git_pull(){
    git -C "$1" pull --quiet 2>&1 > /dev/null
}

git_checkout_main(){
    git -C "$1" checkout --quiet main 2>&1 > /dev/null
}

git_restore_file(){
    git -C $1  restore --quiet --source $2 $3 2>&1 > /dev/null
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

git_checkout_main $REPO
git_pull $REPO

cp "${REPO_PORTS_JSON}" "${WDIR}/"

echo "[" > "${COMMITS_JSON}"

commit_day="$SINCE"
count=0

while [[ ! "$commit_day" =~ "$UNTIL" ]]
do

    echo -n "${commit_day}"

    commit_hash=`git_lastcommit $REPO $commit_day`

    if [[ "$commit_hash" == "" ]]; then
        echo " -> No commit at this date"
    else
        [ $count -gt 0 ] && echo "," >> "${COMMITS_JSON}"

        echo " -> Commit ($commit_hash) found"
        echo    "  { \"id\": \"$count\"," >> "${COMMITS_JSON}"
        echo    "    \"date\": \"$commit_day\"," >> "${COMMITS_JSON}"
        echo -n "    \"commit\": \"$commit_hash\"}" >> "${COMMITS_JSON}"

        count=`expr $count + 1`
        git_restore_file $REPO $commit_hash "port_stats.json"
        echo "    copying port_stats.json to ${commit_day}-port_stats.json"
        cp "${REPO_PORT_STATS_JSON}" "${WDIR}/${commit_day}-port_stats.json"

    fi

    commit_day=`$DATEUTIL "+%Y-%m-%d" -d "$commit_day + 1 day"`

done

echo >> "${COMMITS_JSON}"
echo "]" >> "${COMMITS_JSON}"

echo "$count commits found"


