import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preferences6PageRoutingModule } from './preferences6-routing.module';

import { Preferences6Page } from './preferences6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preferences6PageRoutingModule
  ],
  declarations: [Preferences6Page]
})
export class Preferences6PageModule {}
