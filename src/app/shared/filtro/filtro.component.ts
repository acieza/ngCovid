import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Output() fechas: EventEmitter <any> = new EventEmitter();

 Nfecha=Date.now();
 fecha:string;
 fecha2:string;
 semana=1000*60*60*24*7;

 listadoF = {
   fechaAnterior: "",
   fechaPosterior: ""
 }
  
 constructor() { 
  this.fecha= formatDate(this.Nfecha, 'yyyy-MM-dd','en-US');
  this.Nfecha = this.Nfecha - this.semana;
  this.fecha2= formatDate(this.Nfecha, 'yyyy-MM-dd','en-US');
}

  mandarFecha(fechaA:string, fechaP:string){
    this.listadoF.fechaAnterior = fechaA;
    this.listadoF.fechaPosterior = fechaP;

    this.fechas.emit(this.listadoF);
  }



  ngOnInit(): void {
  }

}
