import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-francia',
  templateUrl: './francia.component.html',
  styleUrls: ['./francia.component.css']
})
export class FranciaComponent implements OnInit {

  constructor(private covidService: CovidService) { }

 France: Imundo;

  ngOnInit(): void {
    return this.devuelveFrance();
  }

  devuelveFrance(){
    this.covidService.getAllMundo()
    .subscribe(datosmundo =>{
      this.France = datosmundo.dates['2020-11-25'].countries.France;
    })
  }

}
