import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Usuario} from './usuario';
import { UsuarioService } from './usuario.service';

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
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent  {

  usuarioForm = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    apellido : new FormControl('', [Validators.required]),
    cargo : new FormControl('', [Validators.required]),
    contrasena : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombre', 'apellido', 'cargo'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Usuario>;

  constructor(private usuarioService: UsuarioService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  private listar() {
    this.usuarioService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }

  onClickCrear() : void {
    this.usuarioService.add(this.usuarioForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
      this.listar();
      this.usuarioForm.reset();

    });
  }


}