import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Makeaccount3PageRoutingModule } from './makeaccount3-routing.module';

import { Makeaccount3Page } from './makeaccount3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Makeaccount3PageRoutingModule
  ],
  declarations: [Makeaccount3Page]
})
export class Makeaccount3PageModule {}
