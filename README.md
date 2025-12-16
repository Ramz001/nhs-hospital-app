keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

java -jar bundletool-all.jar build-apks --bundle=app-release.aab --output=app.apks --mode=universal --ks=my-release-key.keystore --ks-pass=pass:123456 --ks-key-alias=alias_name --key-pass=pass:123456