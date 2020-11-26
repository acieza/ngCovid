import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
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

  //GRAFICAS//
  lineChartData: ChartDataSets[]=[
    {data: [100,72,64,50,85,96,25], 
     label: 'Numero de Recuperados'},
     
  ];

  lineChartLabels: Label[]=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

  lineChartOptions ={
    responsive:true,
  };

  lineChartColors: Color[] = [
    {
    borderColor:'black',
    backgroundColor:'rgba(255,0,0,0.2)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins=[];
  lineChartType= 'line';
}
