import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/services/ciudad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  formCiudad : FormGroup;

  constructor(private router:Router, private form:FormsModule, private ciudad:CiudadService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  /*
  **Construye el formulario de ciudades
  */
 buildForm(){
  this.formCiudad = this.formBuilder.group({
    ciudad : [null, Validators.required],
  });
 }


  postform(form: Ciudad){
    this.ciudad.agregarCiudad(form).subscribe(info=>{
      Swal.fire('Ciudad Guardado', 'Ciudad registrada con exito', 'success');
      console.log(info)
      this.router.navigate(['ciudades'])
    })
  }

  regresar(){
    this.router.navigate(['ciudades'])
  }
}
