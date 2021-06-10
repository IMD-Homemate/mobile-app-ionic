import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Walkthrough3PageRoutingModule } from './walkthrough3-routing.module';

import { Walkthrough3Page } from './walkthrough3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Walkthrough3PageRoutingModule
  ],
  declarations: [Walkthrough3Page]
})
export class Walkthrough3PageModule {}
