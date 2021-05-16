import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Makeaccount2Page } from './makeaccount2.page';

const routes: Routes = [
  {
    path: '',
    component: Makeaccount2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Makeaccount2PageRoutingModule {}
