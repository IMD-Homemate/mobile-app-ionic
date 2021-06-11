import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Promotead3Page } from './promotead3.page';

const routes: Routes = [
  {
    path: '',
    component: Promotead3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promotead3PageRoutingModule {}
