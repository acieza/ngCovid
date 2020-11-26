import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'mundo', loadChildren: () => import('./pages/mundo/mundo.module').then(m => m.MundoModule) }, 
  { path: 'espana', loadChildren: () => import('./pages/espana/espana.module').then(m => m.EspanaModule) },
  { path: 'francia', loadChildren: () => import('./pages/francia/francia.module').then(m => m.FranciaModule) },
  { path: 'alemania', loadChildren: () => import('./pages/alemania/alemania.module').then(m => m.AlemaniaModule) },
  { path: 'portugal', loadChildren: () => import('./pages/portugal/portugal.module').then(m => m.PortugalModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
