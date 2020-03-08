import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelsNewPageRoutingModule } from './travels-new-routing.module';

import { TravelsNewPage } from './travels-new.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelsNewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TravelsNewPage]
})
export class TravelsNewPageModule {}
