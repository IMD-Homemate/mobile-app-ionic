import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeOptionPage } from './welcome-option.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeOptionPageRoutingModule {}
