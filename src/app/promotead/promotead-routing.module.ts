import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromoteadPage } from './promotead.page';

const routes: Routes = [
  {
    path: '',
    component: PromoteadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoteadPageRoutingModule {}
