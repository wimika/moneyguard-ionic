import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { SessionDetailsComponent } from '../session-details/session-details.component';
import { ModalController, NavController } from '@ionic/angular';
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  sessionData: any;

  constructor( 
    private authService: AuthenticationService,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {}


  ngOnInit() {
    //this.getSessionData();
  }


  getSessionData() {
    this.sessionData = this.authService.getUser();
    this.presentSessionDetailsModal();
  }

  checkPlugin() {
    const wimika = cordova.plugins.Moneyguard;
  }

  
  moveCredential(){
    this.navCtrl.navigateRoot('/credential');
  }

  checkRisk(){
    
  }

  moveDebit(){
    this.navCtrl.navigateRoot('/debit');
  }

  moveTyping(){
    this.navCtrl.navigateRoot('/typing');
  }

  async presentSessionDetailsModal() {
    const modal = await this.modalController.create({
      component: SessionDetailsComponent,
      componentProps: {
        sessionData: this.sessionData
      }
    });
    return await modal.present();
  }

}
