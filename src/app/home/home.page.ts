import { Component } from '@angular/core';
import { HashAlgorithm } from 'Moneyguard/www/MoneyGuardTypes/HashAlgorithm';
import { CredentialScanResult } from 'Moneyguard/www/MoneyGuardTypes/CredentialScanResult';
import { DebitTransactionCheckResult } from 'Moneyguard/www/MoneyGuardTypes/DebitTransactionCheckResult';
import { RiskStatus } from 'Moneyguard/www/MoneyGuardTypes/RiskStatus';
import { SpecificRisk } from 'Moneyguard/www/MoneyGuardTypes/SpecificRisk';
import { RiskResult } from 'Moneyguard/www/MoneyGuardTypes/RiskResult';

// Declare cordova to avoid type errors
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }





  

  // Method to check plugin functionality
  checkPlugin() {
    // Access Moneyguard plugin from cordova
    const { registerGuard } = cordova.plugins.Moneyguard;
    const partnerBankId = "";
    const sessionToken = "";

    registerGuard(
      partnerBankId,
      sessionToken,
      (result: any) => {
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    );


  }

  checkCredential() {
    const { checkCredential } = cordova.plugins.Moneyguard;

    var credentialCheckReq = {
      username: "example_user",
      passwordStartingCharactersHash: "example_hash",
      passwordFragmentLength: 10,
      hashAlgorithm: HashAlgorithm.SHA256,
      domain: "example.com"
    };

    checkCredential(
      credentialCheckReq,
      (result: any) => {
        var res: CredentialScanResult = result;
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  checkDebitTransaction() {
    const { checkDebitTransaction } = cordova.plugins.Moneyguard;

    var transactionReq =
    {
      sourceAccountNumber: "CHK-123456789", //Account to debit
      amount: 100000,
      memo: "Electricity Purchase",
      destinationBank: "098", // Destination Bank Code
      destinationAccountNumber: "KGD-987654321" //Destination Account Number
    };

    checkDebitTransaction(
      transactionReq,
      (result: any) => {
        var res: DebitTransactionCheckResult = result;
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  checkRiskProfile() {
    const { getRiskProfile } = cordova.plugins.Moneyguard;

    getRiskProfile(
      (result: any) => {
        var res: RiskResult = result;
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
