import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-alemania',
  templateUrl: './alemania.component.html',
  styleUrls: ['./alemania.component.css']
})
export class AlemaniaComponent implements OnInit {

  constructor(private covidService: CovidService) {
    this.fecha= formatDate(this.Nfecha, 'yyyy-MM-dd','en-US');
   }

  Germany: Imundo;
  Nfecha=Date();
  fecha : string;
 
   ngOnInit(): void {
     return this.devuelveGermany();
   }
 
   devuelveGermany(){
     this.covidService.getAllMundo(this.fecha, 'Germany')
     .subscribe(datosmundo =>{
       this.Germany = datosmundo.dates[this.fecha].countries.Germany;
     })
   }

}
