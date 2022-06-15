import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

const urlApi = 'http://localhost:8081/api/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Usuario> {
    return this.http.get<Usuario>(urlApi);
  }

  add(usuario: Usuario) {
    return this.http.post<Usuario>(urlApi, usuario);
  }
}