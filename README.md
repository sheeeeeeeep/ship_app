# ship_app
app for kaoshiung port pilots
### install dependencies
```
npm install
```

### run on simulator
android
```
ionic cordova run android
```

ios
```
ionic cordova run ios -- --buildFlag="-UseModernBuildSystem=0"
```

### build and sign apk
```
ionic cordova build android --prod --release
zipalign -v 4 app-release-unsigned.apk ship_app.apk
apk-signer -f app-release-unsigned.apk -a ship_app -k ship_app.keystore -o SmartPort -s ship_app
```