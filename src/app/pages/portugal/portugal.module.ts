import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortugalRoutingModule } from './portugal-routing.module';
import { PortugalComponent } from './portugal.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PortugalComponent],
  imports: [
    CommonModule,
    PortugalRoutingModule,
    SharedModule
  ]
})
export class PortugalModule { }
