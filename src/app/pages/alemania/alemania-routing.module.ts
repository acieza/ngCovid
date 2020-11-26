import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlemaniaComponent } from './alemania.component';

const routes: Routes = [{ path: '', component: AlemaniaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlemaniaRoutingModule { }
