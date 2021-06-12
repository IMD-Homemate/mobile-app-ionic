import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Promotead3PageRoutingModule } from './promotead3-routing.module';

import { Promotead3Page } from './promotead3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Promotead3PageRoutingModule
  ],
  declarations: [Promotead3Page]
})
export class Promotead3PageModule {}
