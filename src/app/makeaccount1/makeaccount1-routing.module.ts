import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Makeaccount1Page } from './makeaccount1.page';

const routes: Routes = [
  {
    path: '',
    component: Makeaccount1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Makeaccount1PageRoutingModule {}
