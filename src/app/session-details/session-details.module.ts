import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SessionDetailsComponent } from './session-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [SessionDetailsComponent],
  exports: [SessionDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SessionDetailsModule {}
