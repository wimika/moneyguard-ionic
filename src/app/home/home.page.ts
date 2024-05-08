import { Component } from '@angular/core';
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  checkPlugin() {
    const wimika = cordova.plugins.Moneyguard;
    console.log(wimika);
    wimika.echo(
      'testing',
      (result: any) => {
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
