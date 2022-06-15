import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Estadistica} from './estadistica';
import { EstadisticaService } from './estadistica.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { JugadorService } from '../jugador/jugador.service';

import {MatSnackBar} from '@angular/material/snack-bar';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {
  estadisticaForm = new FormGroup({
    rival : new FormControl('', [Validators.required]),
    fecha : new FormControl('', [Validators.required]),
    jornada : new FormControl('',[Validators.required]),
    goles : new FormControl('',[Validators.required]),
    remates : new FormControl('',[Validators.required]),
    asistencias : new FormControl('',[Validators.required]),
    pases : new FormControl('',[Validators.required]),
    recuperaciones : new FormControl('',[Validators.required]),
    perdidas : new FormControl('',[Validators.required]),
    faltasCometidas : new FormControl('',[Validators.required]),
    faltasRecibidas : new FormControl('',[Validators.required]),
    jugador : new FormControl('',Validators.required)
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['rival', 'fecha', 'jornada','goles','remates','asistencias','pases','recuperaciones',
                                'perdidss', 'faltasCometidas','faltasRecibidas','jugador'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Estadistica>;

  constructor(private estadisticaService: EstadisticaService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.estadisticaService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }

  onClickCrear() : void {
    this.estadisticaService.add(this.estadisticaForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
      this.listar();
      this.estadisticaForm.reset();

    });
  }


}