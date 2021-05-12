import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Preferences5PageRoutingModule } from './preferences5-routing.module';

import { Preferences5Page } from './preferences5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preferences5PageRoutingModule
  ],
  declarations: [Preferences5Page]
})
export class Preferences5PageModule {}
