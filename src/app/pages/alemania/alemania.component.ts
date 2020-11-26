import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-alemania',
  templateUrl: './alemania.component.html',
  styleUrls: ['./alemania.component.css']
})
export class AlemaniaComponent implements OnInit {

  constructor(private covidService: CovidService) { }

  Germany: Imundo;
 
   ngOnInit(): void {
     return this.devuelveGermany();
   }
 
   devuelveGermany(){
     this.covidService.getAllMundo()
     .subscribe(datosmundo =>{
       this.Germany = datosmundo.dates['2020-11-25'].countries.Germany;
     })
   }

}
