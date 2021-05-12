import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preferences4PageRoutingModule } from './preferences4-routing.module';

import { Preferences4Page } from './preferences4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preferences4PageRoutingModule
  ],
  declarations: [Preferences4Page]
})
export class Preferences4PageModule {}
