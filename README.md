1. Install the Cordova plugin "com.wimika.ionic.moneyguard":

    ```bash
    cordova plugin add moneyguard-ionic@0.0.1
    ```

2. Setting Up Your Ionic App:

    ### Android Permissions

    Add the following permissions to your `AndroidManifest.xml` file to enable network communication:

    ```xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    ```

    ### Broadcast Receivers

    Declare the following broadcast receivers in your `AndroidManifest.xml` file:

    ```xml
    <receiver android:exported="true" android:name="com.kavsdk.AppInstallationReceiver">
    </receiver>
    <receiver android:exported="true" android:name="com.kavsdk.shared.cellmon.SMSReceiver">
    </receiver>
    <receiver android:exported="true" android:name="com.kavsdk.simwatch.generic.SimStateChangedBroadcastReceiver">
    </receiver>
    ```

    ### Dependencies

    Add the following dependencies to your app's `build.gradle` file:

    ```gradle
    implementation 'com.squareup.retrofit2:retrofit:2.11.0'
    implementation 'com.google.code.gson:gson:2.10.1'
    implementation 'com.squareup.retrofit2:converter-gson:2.11.0'
    implementation 'com.squareup.okhttp3:logging-interceptor:4.2.0'
    implementation 'com.fingerprint.android:pro:2.4.0'
    implementation fileTree(dir: 'libs', include: '*.aar')
    ```

3. Declare the Cordova plugin in your Angular component:

    ```typescript
    // Add the following line at the beginning of your Angular component
    declare var cordova: any;
    ```

4. Create a reference:

    ```typescript
    // Inside your component or service
    const wimika = cordova.plugins.Moneyguard;
    ```

5. Register your app:

```typescript
// Replace 'partnerBankId' and 'sessionToken' with your actual values
Moneyguard.registerGuard(
   partnerBankId,
   sessionToken,
   (session: any) => {
       console.log('Session Object:', session);
   },
   (error: any) => {
       console.error('Error initializing MoneyGuard:', error);
   }
);
```

Make sure to replace placeholders like 'partnerBankId' and 'sessionToken' with your actual values in the last step.
