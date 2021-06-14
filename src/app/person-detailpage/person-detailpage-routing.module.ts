import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonDetailpagePage } from './person-detailpage.page';

const routes: Routes = [
  {
    path: '',
    component: PersonDetailpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonDetailpagePageRoutingModule {}
