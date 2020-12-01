import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imundo } from './interfaces/Imundo';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getAllMundo(fecha:string, pais: string){
    return this.http.get<any>(`https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`)
  }

  getAllFechas(fechaA:string, fechaP:string, pais: string){
    return this.http.get<any>(`https://api.covid19tracking.narrativa.com/api/country/${pais}?date_from=${fechaA}&date_to=${fechaP}`)
  }

 


}
