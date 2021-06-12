import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoPageRoutingModule } from './favo-routing.module';

import { FavoPage } from './favo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoPageRoutingModule
  ],
  declarations: [FavoPage]
})
export class FavoPageModule {}
