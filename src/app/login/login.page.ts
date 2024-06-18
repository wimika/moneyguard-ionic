import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router }

  from '@angular/router';
// Declare cordova to avoid type errors
declare var cordova: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    const { getSession } = cordova.plugins.Moneyguard;

    if (this.username === '' || this.password === '') {
      this.message = 'Please enter your username and password';
      await this.presentToast();
      this.isToastOpen = true;
      return;
    }
    console.log(this.username, this.password);
    getSession(
      this.username,
      this.password,
      (result: any) => {
        this.authService.setUser(result);
        this.router.navigate(['/home']);
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

}
