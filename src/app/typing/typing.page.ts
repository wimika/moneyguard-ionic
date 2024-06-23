import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';



// Declare cordova to avoid type errors
declare var cordova: any;


@Component({
  selector: 'app-typing',
  templateUrl: './typing.page.html',
  styleUrls: ['./typing.page.scss'],
})
export class TypingPage implements OnInit {

  public content: string;
  public message: string;
  public isToastOpen = false;

  constructor(
    private toastController: ToastController,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.content = '';
    this.message = '';
  }

  ngOnInit() {
  }

  async signIn() {
    const { getSession } = cordova.plugins.Moneyguard;

    if (this.content === '' || this.content === '') {
      this.message = 'Please enter text';
      await this.presentToast();
      this.isToastOpen = true;
      return;
    }

    
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
