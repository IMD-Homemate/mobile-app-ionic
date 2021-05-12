import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preferences7PageRoutingModule } from './preferences7-routing.module';

import { Preferences7Page } from './preferences7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preferences7PageRoutingModule
  ],
  declarations: [Preferences7Page]
})
export class Preferences7PageModule {}
