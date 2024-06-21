import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


// Declare cordova to avoid type errors
declare var cordova: any;

@Component({
  selector: 'app-debit',
  templateUrl: './debit.page.html',
  styleUrls: ['./debit.page.scss'],
})
export class DebitPage implements OnInit {

  public sourceAccountNumber: string;
  public destinationBank: string;
  public destinationAccountNumber: string;
  public amount: number;
  public memo: string;
  public isToastOpen = false;
  public message: string;

  constructor(
    private toastController: ToastController,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.sourceAccountNumber = '';
    this.destinationBank = '';
    this.destinationAccountNumber = '';
    this.amount = 0;
    this.memo = '';
    this.message = '';
  }

  ngOnInit() {
  }

  async signIn() {

    const { checkDebitTransaction } = cordova.plugins.Moneyguard;

    var reqPayoad: any = {
      sourceAccountNumber: this.sourceAccountNumber,
      destinationBank: this.destinationBank,
      destinationAccountNumber: this.destinationAccountNumber,
      amount: this.amount,
      memo: this.memo
    };

    checkDebitTransaction(
      reqPayoad,
      async (result: any) => {
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message, // Message bound to toastMessage
      duration: 5000
    });
    await toast.present();
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
