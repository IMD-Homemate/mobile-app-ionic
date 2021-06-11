import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Promotead2PageRoutingModule } from './promotead2-routing.module';

import { Promotead2Page } from './promotead2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Promotead2PageRoutingModule
  ],
  declarations: [Promotead2Page]
})
export class Promotead2PageModule {}
