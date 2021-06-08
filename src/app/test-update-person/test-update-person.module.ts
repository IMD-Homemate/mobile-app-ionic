import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestUpdatePersonPageRoutingModule } from './test-update-person-routing.module';

import { TestUpdatePersonPage } from './test-update-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestUpdatePersonPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TestUpdatePersonPage]
})
export class TestUpdatePersonPageModule {}
