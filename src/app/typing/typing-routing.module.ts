import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypingPage } from './typing.page';

const routes: Routes = [
  {
    path: '',
    component: TypingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypingPageRoutingModule {}
