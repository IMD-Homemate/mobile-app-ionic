import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preferences2Page } from './preferences2.page';

const routes: Routes = [
  {
    path: '',
    component: Preferences2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preferences2PageRoutingModule {}
