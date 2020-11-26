import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CovidService } from 'src/app/core/servicio/covid.service';
import { Imundo } from 'src/app/core/servicio/interfaces/Imundo';

@Component({
  selector: 'app-espana',
  templateUrl: './espana.component.html',
  styleUrls: ['./espana.component.css']
})
export class EspanaComponent implements OnInit {
  Nfecha=Date();
  fecha:string;

  constructor(private covidService:CovidService) { 
    this.fecha= formatDate(this.Nfecha, 'yyyy-MM-dd','en-US');
  }

 



  Spain:Imundo

  ngOnInit(): void {
    this.devuelveSpain();
  }


  devuelveSpain(){
    this.covidService.getAllMundo(this.fecha)
    .subscribe(datosmundo =>{
      this.Spain = datosmundo.dates[this.fecha].countries.Spain;
    })
  }

  //GRAFICAS//
  barChartData: ChartDataSets[]=[
    {data: [100,62,64,70,85,72,25], 
     label: 'Numero de Recuperados'},
     {data: [65,72,42,50,52,96,55], 
      label: 'Numero de Muertos'},
      {data: [42,62,62,70,22,76,35], 
        label: 'Numero de infectados'}
    

  ];

  barChartLabels: Label[]=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

  barChartOptions ={
    responsive:true
  };

  /*barChartColors: Color[] = [
    {
    borderColor:'black',
    backgroundColor:'rgba(255,0,0,0,4)',
    },{
      borderColor:'black',
      backgroundColor:'rgba(255,0,0,0,4)',
    },
    {
      borderColor:'black',
      backgroundColor:'rgba(255,255,0,0,4)',
    }
  ];*/
  

  barChartLegend = true;
  barChartPlugins=[];
  barChartType= 'bar';
}

