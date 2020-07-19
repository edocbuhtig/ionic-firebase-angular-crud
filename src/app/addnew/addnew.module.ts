import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewPageRoutingModule } from './addnew-routing.module';

import { AddnewPage } from './addnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddnewPageRoutingModule
  ],
  declarations: [AddnewPage]
})
export class AddnewPageModule {}
