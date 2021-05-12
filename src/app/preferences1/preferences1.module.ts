import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preferences1PageRoutingModule } from './preferences1-routing.module';

import { Preferences1Page } from './preferences1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preferences1PageRoutingModule
  ],
  declarations: [Preferences1Page]
})
export class Preferences1PageModule {}
