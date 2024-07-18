# PortMaster-Charts

## Functionality

This tool written in bash generates a javascript webpage that displays a graphic chart from the download statistics available in the [PortMaster-Info](https://github.com/PortsMaster/PortMaster-Info) repo.

## Requirement to use the tool

- [jq](https://jqlang.github.io/jq/) tool. You can get it with `apt install jq` on ubuntu and `brew install jq` on macOS
- gdate if you're a macOS user. You can get it with `brew install coreutils`
- git. You can get it with `apt install git` on ubuntu and `brew install git` on macOS
- a local webserver. Python3 will do it.
- a shell

## How to use this tool

First clone PortMaster-Info:

```
git clone https://github.com/PortsMaster/PortMaster-Info
```

Then clone this repo:

```
git clone https://github.com/cdeletre/PortMaster-Charts.git
```

Then run it:

```
./gendata.sh 2024-07-01 2024-07-19
```

Enter the directory of the day, in our example `2024-07-18`, and run a local webserver with python3:
```
cd 2024-07-18
python3 -m http.server 8000
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your favorite browser.