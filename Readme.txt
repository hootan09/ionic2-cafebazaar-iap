-----------------------------------------------
cordova help

$ android
For SDK 22 (Android 4.1.1, "android-22")

$ cordova platforms remove android
$ cordova platforms add android@4.1.1

Debug >>> $ cordova build  android
Release >>> $ cordova build --release android

note: 
	--prod .build it in production mode . help to boot faster the app 

	also some people say in ios for fix blank page you must :

			npm install ionic-native --save

It works for me.(you can use ionic command just like cordova)

this will get you an unsigned apk applications(in release mode) you must sign it..
----------------------------------------
for sign the apk
this needs jdk in invirement variables path

$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name


-----------------------------------------------
for debuging in emulator or android device 

$ ionic run android

in chrome

chrome://inspect

/////////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////
IONIC help (android sdk 6.0 must be installed)

Android Devices Requirements Android Studio
Updated Android SDK tools, platform and component dependencies. Available through Android Studio’s SDK Manager
Running Your App
To run your app, all you have to do is enable USB debugging and Developer Mode on your Android device,
then run
				ionic run android --device
				
from the command line.
This will produce a debug build of your app, both in terms of Android and Ionic’s code
Enabling USB debugging and Developer Mode can vary between devices, but is easy to look up with a Google search.
You can also check out Enabling On-device Developer Options in the Android docs.

Production Builds
To run or build your app for prodction

				ionic run android --prod --release
				# or
				ionic build android --prod --release

This will minify your app’s code as Ionic’s source and also remove any debugging capabilities from the APK.
This is generally used when deploying an app to the Google Play store.


////////////
/////////////
/////////////
/////////////
for buildig android 4.0.1 and using camera you must add:
	npm install --save @ionic-native/camera
	cordova plugin add cordova-plugin-camera@^1.2.0 --save
for image picker use the bellow command:
		ionic plugin add cordova-plugin-image-picker --save
		npm install --save @ionic-native/image-picker
for postind picture to server we need -file- plugin
		cordova plugin add cordova-plugin-file --save
		npm install @ionic-native/file --save
/////////////
////////////
////////////
adding page to project with ionic CLI
	ionic g page alertPage

/////////////////////
for debuging ionic2 project in the below line in package.json under devDependencies

    "config": {
    "ionic_source_map_type": "source-map"
  },
/////////////////////////
//////////////////////////////////////////////////////////
debuging in android devices

add

"config": {
    "ionic_bundler": "webpack",
    "ionic_source_map": "source-map"
  },
in package.json to be able to debug properly
Then execute in console: ionic run android -l
When the app is running in the device, then click to debug in VSCode using the option:
Attach to running android on device
Now you can debug properly and livereload is working, there is only one bug about breakpoints

////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////