import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelsNewPage } from './travels-new.page';

const routes: Routes = [
  {
    path: '',
    component: TravelsNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelsNewPageRoutingModule {}
