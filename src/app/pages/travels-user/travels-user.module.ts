import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelsUserPageRoutingModule } from './travels-user-routing.module';

import { TravelsUserPage } from './travels-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelsUserPageRoutingModule
  ],
  declarations: [TravelsUserPage]
})
export class TravelsUserPageModule {}
