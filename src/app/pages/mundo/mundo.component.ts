import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-mundo',
  templateUrl: './mundo.component.html',
  styleUrls: ['./mundo.component.css']
})
export class MundoComponent implements OnInit {

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.devuelveMundo();
  }

  Total:Imundo;

  devuelveMundo(){
    this.covidService.getAllMundo()
    .subscribe(datosmundo =>{
      this.Total = datosmundo.total;
    })
  }

}
