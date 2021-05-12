import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preferences3Page } from './preferences3.page';

const routes: Routes = [
  {
    path: '',
    component: Preferences3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preferences3PageRoutingModule {}
