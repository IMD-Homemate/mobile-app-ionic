import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walkthrough2Page } from './walkthrough2.page';

const routes: Routes = [
  {
    path: '',
    component: Walkthrough2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Walkthrough2PageRoutingModule {}
