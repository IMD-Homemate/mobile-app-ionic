import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { TestPersonPageRoutingModule } from './test-person-routing.module';

import { TestPersonPage } from './test-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPersonPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TestPersonPage]
})
export class TestPersonPageModule {}
