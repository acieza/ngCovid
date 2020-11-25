import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-espana',
  templateUrl: './espana.component.html',
  styleUrls: ['./espana.component.css']
})
export class EspanaComponent implements OnInit {

  constructor(private covidService:CovidService) { }


  Spain:Imundo

  ngOnInit(): void {
    this.devuelveSpain();
  }


  devuelveSpain(){
    this.covidService.getAllMundo()
    .subscribe(datosmundo =>{
      this.Spain = datosmundo.dates['2020-11-25'].countries.Spain;
    })
  }
}
