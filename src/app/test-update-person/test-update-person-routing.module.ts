import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestUpdatePersonPage } from './test-update-person.page';

const routes: Routes = [
  {
    path: '',
    component: TestUpdatePersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestUpdatePersonPageRoutingModule {}
