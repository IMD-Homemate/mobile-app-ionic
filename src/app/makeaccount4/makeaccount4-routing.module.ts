import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Makeaccount4Page } from './makeaccount4.page';

const routes: Routes = [
  {
    path: '',
    component: Makeaccount4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Makeaccount4PageRoutingModule {}
