import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Jugador} from './jugador';
import { JugadorService } from './jugador.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  jugadorForm = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    numeroIdentificacion : new FormControl('', [Validators.required]),
    equipo : new FormControl('',[Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombre', 'numeroIdentificacion', 'equipo'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Jugador>;

  constructor(private jugadorService: JugadorService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.jugadorService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }

  onClickCrear() : void {
    this.jugadorService.add(this.jugadorForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
      this.listar();
      this.jugadorForm.reset();

    });
  }


}