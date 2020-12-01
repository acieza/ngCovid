import { Component, OnInit, Input, Output, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-covidh',
  templateUrl: './covidh.component.html',
  styleUrls: ['./covidh.component.css']
})
export class CovidhComponent implements OnChanges {
  //datos: Imundo;
  bandera = false;

  @Input() datos: Imundo;
  constructor() { }

  

  ngOnChanges(changes: SimpleChanges){
    const cambiodatos: SimpleChange = changes.datos;

    if(cambiodatos.currentValue){
      this.bandera=true;
    }
  }

}
