#!/usr/bin/env python3

import json

from pathlib import Path

PMSTATS_DIR = Path('PMstats')
DATASTATS_JSON_PATH = Path('www/datastats.json')

with open(PMSTATS_DIR / 'commits.json', 'r') as fh:
    j_commits = json.load(fh)

with open(PMSTATS_DIR / 'ports.json', 'r') as fh:
    j_ports = json.load(fh)

j_datastats={}

j_datastats["ports"]=j_ports["ports"]

j_datastats["stats"]={}

for i, commit in enumerate(reversed(j_commits)):
    with open(PMSTATS_DIR / f"{commit["date"]}-port_stats.json",  'r') as fh:
        j_stats=json.load(fh)

        j_datastats["stats"]["%d" % i]={}
        j_datastats["stats"]["%d" % i]["date"]=commit["date"]
        j_datastats["stats"]["%d" % i]["ports"]=j_stats["ports"]
        j_datastats["stats"]["%d" % i]["total_downloads"]=j_stats["total_downloads"]

with open(DATASTATS_JSON_PATH,'w+') as fh:
    fh.write(json.dumps(j_datastats,indent=2))