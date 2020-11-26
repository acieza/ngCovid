import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.component.html',
  styleUrls: ['./portugal.component.css']
})
export class PortugalComponent implements OnInit {

  constructor(private covidService: CovidService) { }

 Portugal: Imundo;

  ngOnInit(): void {
    return this.devuelvePortugal();
  }

  devuelvePortugal(){
    this.covidService.getAllMundo()
    .subscribe(datosmundo =>{
      this.Portugal = datosmundo.dates['2020-11-25'].countries.Portugal;
    })
  }
}
