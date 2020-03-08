import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelsUserPage } from './travels-user.page';

const routes: Routes = [
  {
    path: '',
    component: TravelsUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelsUserPageRoutingModule {}
