import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walkthrough3Page } from './walkthrough3.page';

const routes: Routes = [
  {
    path: '',
    component: Walkthrough3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Walkthrough3PageRoutingModule {}
