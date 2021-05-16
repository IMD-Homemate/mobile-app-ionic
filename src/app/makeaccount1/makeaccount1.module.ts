import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Makeaccount1PageRoutingModule } from './makeaccount1-routing.module';

import { Makeaccount1Page } from './makeaccount1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Makeaccount1PageRoutingModule
  ],
  declarations: [Makeaccount1Page]
})
export class Makeaccount1PageModule {}
