import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MaterialExampleModule} from './material.module';
import { GlobalErrorHandler } from './global-error-handler';
import { InicioComponent } from './inicio/inicio';
import { JugadorComponent } from './jugador/jugador.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';
import { AutorizacionGuard } from './autorizacion.guard';
import { EstadisticaComponent } from './estadistica/estadistica.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    InicioComponent,
    JugadorComponent,
    LoginComponent,
    EstadisticaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler,
  },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AutorizacionGuard,
],
  bootstrap: [AppComponent]
})
export class AppModule { }

