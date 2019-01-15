jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk my-alias
cd platforms/android/app/build/outputs/apk/release/
~/Library/Android/sdk/build-tools/28.0.3/zipalign -v 4 app-release-unsigned.apk ship_app2.apk
~/Library/Android/sdk/build-tools/28.0.3/apksigner verify ship_app2.apk
