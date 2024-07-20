#!/usr/bin/env python3

import json

PMSTATS_DIR='PMstats'
DATASTATS_JSON_PATH='www/datastats.json'

#f_data=open('data.json','w+')
f_commits=open('%s/commits.json' % PMSTATS_DIR, 'r')
f_ports=open('%s/ports.json' % PMSTATS_DIR, 'r')

j_commits = json.load(f_commits)
j_ports = json.load(f_ports)
j_datastats={}

j_datastats["ports"]=j_ports["ports"]

j_datastats["stats"]={}

for i, commit in enumerate(reversed(j_commits)):
    f_stats=open('%s/%s-port_stats.json' % (PMSTATS_DIR,commit["date"]), 'r')
    j_stats=json.load(f_stats)

    j_datastats["stats"]["%d" % i]={}
    j_datastats["stats"]["%d" % i]["date"]=commit["date"]
    j_datastats["stats"]["%d" % i]["ports"]=j_stats["ports"]
    j_datastats["stats"]["%d" % i]["total_downloads"]=j_stats["total_downloads"]

    f_stats.close()

f_datastats = open(DATASTATS_JSON_PATH, 'w+')
f_datastats.write(json.dumps(j_datastats,indent=2))

f_datastats.close()
f_commits.close()
f_ports.close()