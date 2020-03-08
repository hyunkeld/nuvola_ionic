import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientNewPageRoutingModule } from './client-new-routing.module';

import { ClientNewPage } from './client-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientNewPageRoutingModule
  ],
  declarations: [ClientNewPage]
})
export class ClientNewPageModule {}
