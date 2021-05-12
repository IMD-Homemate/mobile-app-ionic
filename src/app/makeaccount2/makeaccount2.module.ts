import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Makeaccount2PageRoutingModule } from './makeaccount2-routing.module';

import { Makeaccount2Page } from './makeaccount2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Makeaccount2PageRoutingModule
  ],
  declarations: [Makeaccount2Page]
})
export class Makeaccount2PageModule {}
