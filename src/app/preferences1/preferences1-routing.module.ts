import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preferences1Page } from './preferences1.page';

const routes: Routes = [
  {
    path: '',
    component: Preferences1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preferences1PageRoutingModule {}
