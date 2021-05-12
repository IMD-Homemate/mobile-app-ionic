import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Makeaccount3Page } from './makeaccount3.page';

const routes: Routes = [
  {
    path: '',
    component: Makeaccount3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Makeaccount3PageRoutingModule {}
