import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestListPersonPage } from './test-list-person.page';

const routes: Routes = [
  {
    path: '',
    component: TestListPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestListPersonPageRoutingModule {}
