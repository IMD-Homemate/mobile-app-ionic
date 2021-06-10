import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walkthrough4Page } from './walkthrough4.page';

const routes: Routes = [
  {
    path: '',
    component: Walkthrough4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Walkthrough4PageRoutingModule {}
