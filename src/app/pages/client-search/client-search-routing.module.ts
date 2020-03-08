import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientSearchPage } from './client-search.page';

const routes: Routes = [
  {
    path: '',
    component: ClientSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientSearchPageRoutingModule {}
