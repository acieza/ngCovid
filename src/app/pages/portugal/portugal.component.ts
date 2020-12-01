import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.component.html',
  styleUrls: ['./portugal.component.css']
})
export class PortugalComponent implements OnInit {

  constructor(private covidService: CovidService) { 
    this.fecha= formatDate(this.Nfecha, 'yyyy-MM-dd','en-US');
  }

 Portugal: Imundo;
 Nfecha=Date();
 fecha:string;
 
  ngOnInit(): void {
    return this.devuelvePortugal();
  }

  devuelvePortugal(){
    this.covidService.getAllMundo(this.fecha, 'Portugal')
    .subscribe(datosmundo =>{
      this.Portugal = datosmundo.dates[this.fecha].countries.Portugal;
    })
  }
}
