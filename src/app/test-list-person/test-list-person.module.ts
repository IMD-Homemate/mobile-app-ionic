import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestListPersonPageRoutingModule } from './test-list-person-routing.module';

import { TestListPersonPage } from './test-list-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestListPersonPageRoutingModule
  ],
  declarations: [TestListPersonPage]
})
export class TestListPersonPageModule {}
