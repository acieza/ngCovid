import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortugalComponent } from './portugal.component';

const routes: Routes = [{ path: '', component: PortugalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortugalRoutingModule { }
