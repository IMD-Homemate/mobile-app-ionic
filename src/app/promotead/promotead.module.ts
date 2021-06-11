import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromoteadPageRoutingModule } from './promotead-routing.module';

import { PromoteadPage } from './promotead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromoteadPageRoutingModule
  ],
  declarations: [PromoteadPage]
})
export class PromoteadPageModule {}
