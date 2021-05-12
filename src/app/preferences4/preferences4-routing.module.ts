import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preferences4Page } from './preferences4.page';

const routes: Routes = [
  {
    path: '',
    component: Preferences4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preferences4PageRoutingModule {}
