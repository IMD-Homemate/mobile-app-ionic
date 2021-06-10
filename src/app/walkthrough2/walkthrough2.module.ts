import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Walkthrough2PageRoutingModule } from './walkthrough2-routing.module';

import { Walkthrough2Page } from './walkthrough2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Walkthrough2PageRoutingModule
  ],
  declarations: [Walkthrough2Page]
})
export class Walkthrough2PageModule {}
