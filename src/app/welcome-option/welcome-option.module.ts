import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeOptionPageRoutingModule } from './welcome-option-routing.module';

import { WelcomeOptionPage } from './welcome-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeOptionPageRoutingModule
  ],
  declarations: [WelcomeOptionPage]
})
export class WelcomeOptionPageModule {}
