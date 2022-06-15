import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estadistica } from './estadistica';

const urlApi = 'http://localhost:8080/api/estadisticas';
@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Estadistica> {
    return this.http.get<Estadistica>(urlApi);
  }

  add(estadistica: Estadistica) {
    return this.http.post<Estadistica>(urlApi, estadistica);
  }
}