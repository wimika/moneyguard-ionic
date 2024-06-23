import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypingPageRoutingModule } from './typing-routing.module';

import { TypingPage } from './typing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypingPageRoutingModule
  ],
  declarations: [TypingPage]
})
export class TypingPageModule {}
