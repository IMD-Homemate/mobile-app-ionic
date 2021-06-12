import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Promotead2Page } from './promotead2.page';

const routes: Routes = [
  {
    path: '',
    component: Promotead2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promotead2PageRoutingModule {}
