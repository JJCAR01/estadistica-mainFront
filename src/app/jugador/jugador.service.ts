import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from './jugador';

const urlApi = 'http://localhost:8080/api/jugadores';
@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Jugador> {
    return this.http.get<Jugador>(urlApi);
  }

  add(jugador: Jugador) {
    return this.http.post<Jugador>(urlApi, jugador);
  }
}