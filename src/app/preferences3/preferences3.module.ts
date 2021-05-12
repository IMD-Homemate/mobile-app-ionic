import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preferences3PageRoutingModule } from './preferences3-routing.module';

import { Preferences3Page } from './preferences3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preferences3PageRoutingModule
  ],
  declarations: [Preferences3Page]
})
export class Preferences3PageModule {}
