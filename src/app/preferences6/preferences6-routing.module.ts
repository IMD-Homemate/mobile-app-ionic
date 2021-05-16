import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preferences6Page } from './preferences6.page';

const routes: Routes = [
  {
    path: '',
    component: Preferences6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preferences6PageRoutingModule {}
