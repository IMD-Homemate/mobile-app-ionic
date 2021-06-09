import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferencesEditPageRoutingModule } from './preferences-edit-routing.module';

import { PreferencesEditPage } from './preferences-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferencesEditPageRoutingModule
  ],
  declarations: [PreferencesEditPage]
})
export class PreferencesEditPageModule {}
