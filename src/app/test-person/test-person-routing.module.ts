import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPersonPage } from './test-person.page';

const routes: Routes = [
  {
    path: '',
    component: TestPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPersonPageRoutingModule {}
