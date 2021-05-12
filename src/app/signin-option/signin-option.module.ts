import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninOptionPageRoutingModule } from './signin-option-routing.module';

import { SigninOptionPage } from './signin-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninOptionPageRoutingModule
  ],
  declarations: [SigninOptionPage]
})
export class SigninOptionPageModule {}
