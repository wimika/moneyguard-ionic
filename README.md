1. Install the Cordova plugin "com.wimika.ionic.moneyguard":

    ```bash
    cordova plugin add moneyguard-ionic@0.0.1
    ```

2. Declare the Cordova plugin in your Angular component:

    ```typescript
    // Add the following line at the beginning of your Angular component
    declare var cordova: any;
    ```

3. Create a reference:

    ```typescript
    // Inside your component or service
    const wimika = cordova.plugins.Moneyguard;
    ```

4. Register your app:

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
