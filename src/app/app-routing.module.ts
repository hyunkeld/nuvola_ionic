import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'client',
    loadChildren: () => import('./pages/client-show/client-show.module').then(m => m.ClientShowPageModule)
  },
  {
    path: 'client/:id',
    loadChildren: () => import('./pages/client-show/client-show.module').then(m => m.ClientShowPageModule)
  },
  {
    path: 'client-search',
    loadChildren: () => import('./pages/client-search/client-search.module').then( m => m.ClientSearchPageModule)
  },
  {
    path: 'travels-new/:email',
    loadChildren: () => import('./pages/travels-new/travels-new.module').then( m => m.TravelsNewPageModule)
  },
  {
    path: 'travels-user/:email',
    loadChildren: () => import('./pages/travels-user/travels-user.module').then( m => m.TravelsUserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
