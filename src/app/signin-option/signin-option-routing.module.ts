import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninOptionPage } from './signin-option.page';

const routes: Routes = [
  {
    path: '',
    component: SigninOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninOptionPageRoutingModule {}
