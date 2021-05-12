import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preferences2PageRoutingModule } from './preferences2-routing.module';

import { Preferences2Page } from './preferences2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preferences2PageRoutingModule
  ],
  declarations: [Preferences2Page]
})
export class Preferences2PageModule {}
