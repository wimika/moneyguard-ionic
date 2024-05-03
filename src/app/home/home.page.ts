import { Component } from '@angular/core';
<<<<<<< HEAD
import { HashAlgorithm } from 'Moneyguard/www/MoneyGuardTypes/HashAlgorithm';
import { CredentialScanResult } from 'Moneyguard/www/MoneyGuardTypes/CredentialScanResult';
import { DebitTransactionCheckResult } from 'Moneyguard/www/MoneyGuardTypes/DebitTransactionCheckResult';
import { RiskStatus } from 'Moneyguard/www/MoneyGuardTypes/RiskStatus';
import { SpecificRisk } from 'Moneyguard/www/MoneyGuardTypes/SpecificRisk';
import { RiskResult } from 'Moneyguard/www/MoneyGuardTypes/RiskResult';

// Declare cordova to avoid type errors
=======
>>>>>>> a33be8feb0e1099d1b5733b7aee06303efb974d8
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
<<<<<<< HEAD
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
=======
  constructor() {}

  checkPlugin() {
    const wimika = cordova.plugins.Moneyguard;
    console.log(wimika);
    wimika.echo(
      'testing',
>>>>>>> a33be8feb0e1099d1b5733b7aee06303efb974d8
      (result: any) => {
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    );
<<<<<<< HEAD


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

=======
  }
>>>>>>> a33be8feb0e1099d1b5733b7aee06303efb974d8
}
