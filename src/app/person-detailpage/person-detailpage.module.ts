import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonDetailpagePageRoutingModule } from './person-detailpage-routing.module';

import { PersonDetailpagePage } from './person-detailpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonDetailpagePageRoutingModule
  ],
  declarations: [PersonDetailpagePage]
})
export class PersonDetailpagePageModule {}
