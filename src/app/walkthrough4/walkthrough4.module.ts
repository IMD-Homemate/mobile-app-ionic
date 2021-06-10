import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Walkthrough4PageRoutingModule } from './walkthrough4-routing.module';

import { Walkthrough4Page } from './walkthrough4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Walkthrough4PageRoutingModule
  ],
  declarations: [Walkthrough4Page]
})
export class Walkthrough4PageModule {}
