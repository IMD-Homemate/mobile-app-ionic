import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Makeaccount4PageRoutingModule } from './makeaccount4-routing.module';

import { Makeaccount4Page } from './makeaccount4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Makeaccount4PageRoutingModule
  ],
  declarations: [Makeaccount4Page]
})
export class Makeaccount4PageModule {}
