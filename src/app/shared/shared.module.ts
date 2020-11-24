import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro/filtro.component';



@NgModule({
  declarations: [FiltroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroComponent
  ] 
})
export class SharedModule {
  
 }
