import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlemaniaRoutingModule } from './alemania-routing.module';
import { AlemaniaComponent } from './alemania.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AlemaniaComponent],
  imports: [
    CommonModule,
    AlemaniaRoutingModule,
    SharedModule
  ]
})
export class AlemaniaModule { }
