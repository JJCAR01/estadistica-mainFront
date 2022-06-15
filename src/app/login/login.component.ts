import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  login:Login = new Login();

    loginForm = new FormGroup({
      usuario : new FormControl('', [Validators.required]),
      clave : new FormControl('', [Validators.required]),
 
  });

  constructor(public http: HttpClient, private loginService: LoginService) { }

  inciarSesion(): void
  {
    this.login.usuario=this.loginForm.get('usuario')?.value;
    this.login.clave=this.loginForm.get('clave')?.value;
    
    this.loginService.login(this.login).subscribe(respuesta => {
      let token = respuesta.valor;
      window.localStorage.setItem("token", token as string);
      window.location.href = '/home';
    });
  }

}