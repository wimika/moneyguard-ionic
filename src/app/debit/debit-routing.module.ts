import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebitPage } from './debit.page';

const routes: Routes = [
  {
    path: '',
    component: DebitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebitPageRoutingModule {}
