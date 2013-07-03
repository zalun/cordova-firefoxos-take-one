PORT_DEVICE = 6000
PORT_LOCAL = 6000

XPCSHELL ?= ~/Projects/Cordova/mozilla-central/obj-x86_64-apple-darwin12.3.0/dist/bin/xpcshell
ADB ?= /Users/pzalewa/Projects/Cordova/adt-bundle-mac-x86_64-20130522/sdk/platform-tools/adb

FOLDER = framework
ID ?= ${shell basename ${FOLDER} | tr A-Z a-z}

package:
	@echo "ZIPPING ${FOLDER} into application.zip"
	@cd ${FOLDER} && zip -Xr ./application.zip ./* -x application.zip *.appcache

packaged: package
	@echo "PUSHING *${ID}* as packaged app"
	@${ADB} push ${FOLDER}/application.zip /data/local/tmp/b2g/${ID}/application.zip

install: packaged
	@echo "FORWARDING device port $(PORT_DEVICE) to $(PORT_LOCAL)"
	@${ADB} forward tcp:$(PORT_LOCAL) tcp:$(PORT_DEVICE)
	@echo "!!! CONFIRM THE PROMPT on the phone !!!"
	${XPCSHELL} install.js ${ID} $(PORT_LOCAL)
