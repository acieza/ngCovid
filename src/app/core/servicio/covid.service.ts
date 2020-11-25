import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imundo } from './interfaces/Imundo';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getAllMundo(){
    return this.http.get<any>('https://api.covid19tracking.narrativa.com/api/2020-11-25/country/spain')
  }
}
