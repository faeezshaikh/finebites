# FineBites


https://lipis.github.io/bootstrap-social/

  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
 <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.css" rel="stylesheet"> 

sudo ionic cordova build --release android	

(Already generated - do not lose - If Key not already present)
keytool -genkey -v -keystore  awsArch-key.keystore -alias awsArch- -keyalg RSA -keysize 2048 -validity 100000

rm *.apk
cp /Users/faeezshaikh/git/finebites/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk .
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore awsArch-key.keystore app-release-unsigned.apk awsArch-

C:\Users\FSHAI\AppData\Local\Android\android-sdk\build-tools\23.0.1\zipalign -v 4 android-release-unsigned.apk AWS-Certified-Arch.apk
/Users/faeezshaikh/Library/Android/sdk/build-tools/27.0.0/zipalign -v 4 app-release-unsigned.apk FineBites.apk


sudo chmod -R a+rw ios/