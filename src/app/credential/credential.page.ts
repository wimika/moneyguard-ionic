import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';



// Declare cordova to avoid type errors
declare var cordova: any;

@Component({
  selector: 'app-credential',
  templateUrl: './credential.page.html',
  styleUrls: ['./credential.page.scss'],
})
export class CredentialPage implements OnInit {

  public username: string;
  public password: string;
  public message: string;
  public isToastOpen = false;

  constructor(
    private toastController: ToastController,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.username = '';
    this.password = '';
    this.message = '';
  }

  ngOnInit() {
  }

  async signIn() {
    const { checkCredential } = cordova.plugins.Moneyguard;

    if (this.username === '' || this.password === '') {
      this.message = 'Please enter your username and password';
      await this.presentToast();
      this.isToastOpen = true;
      return;
    }
    console.log(this.username, this.password);
    checkCredential(
      this.username,
      this.password,
      async (result: any) => {
        this.message = result;
        await this.presentToast();
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
