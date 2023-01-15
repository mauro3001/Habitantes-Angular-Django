import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  formUsuario : FormGroup;

  constructor(private router:Router, private form:FormsModule, private usuario:UsuarioService, private formBuilder: FormBuilder, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.buildForm();
  }

  /*
  **Construye el formulario de los usuarios
  */
 buildForm(){
  this.formUsuario = this.formBuilder.group({
    nombres : [null],
    apellidos : [null],
    direccion : [null],
    telefono : [null, [Validators.min(1), Validators.pattern(/^\d+$/)]],
    cedula : [null],
    ciudad : [null]
  });
 }


  postform(form: Usuario){
    this.usuario.agregarUser(form).subscribe(info=>{
      Swal.fire('Usuario Guardado', 'Usuario registrado con exito', 'success');
      console.log(info)
      this.router.navigate(['usuarios'])
    })
  }

  regresar(){
    this.router.navigate(['usuarios'])
  }

}
