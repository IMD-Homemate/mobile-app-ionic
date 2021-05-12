import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preferences7Page } from './preferences7.page';

const routes: Routes = [
  {
    path: '',
    component: Preferences7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preferences7PageRoutingModule {}
