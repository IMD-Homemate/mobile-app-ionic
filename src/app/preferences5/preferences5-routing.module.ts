import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preferences5Page } from './preferences5.page';

const routes: Routes = [
  {
    path: '',
    component: Preferences5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preferences5PageRoutingModule {}
