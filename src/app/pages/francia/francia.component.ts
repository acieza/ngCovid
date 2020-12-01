import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-francia',
  templateUrl: './francia.component.html',
  styleUrls: ['./francia.component.css']
})
export class FranciaComponent implements OnInit {

  constructor(private covidService: CovidService) { 
    this.fecha= formatDate(this.Nfecha, 'yyyy-MM-dd','en-US');
  }

 France: Imundo;
 Nfecha = Date();
 fecha : string;


  ngOnInit(): void {
    return this.devuelveFrance();
  }

  devuelveFrance(){
    this.covidService.getAllMundo(this.fecha, 'France')
    .subscribe(datosmundo =>{
      this.France = datosmundo.dates[this.fecha].countries.France;
    })
  }

}
