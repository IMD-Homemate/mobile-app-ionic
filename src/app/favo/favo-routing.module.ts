import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoPage } from './favo.page';

const routes: Routes = [
  {
    path: '',
    component: FavoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoPageRoutingModule {}
