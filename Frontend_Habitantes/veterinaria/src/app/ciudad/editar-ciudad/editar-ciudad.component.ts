import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/services/ciudad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router:Router, private form:FormsModule, private ciudad:CiudadService) { }

  datosciudad !: Ciudad;

  editarform = new FormGroup({
    ciudad : new FormControl('')
  });

  ngOnInit(): void {
    let id_ciudad = this.activeroute.snapshot.paramMap.get('id_ciudad')
    this.ciudad.extraerCiudad(id_ciudad).subscribe(datos=>{
      this.datosciudad = datos;
      console.log(datos);
      this.editarform.setValue({
        'ciudad': this.datosciudad.ciudad,
      })
    })
  }

  putform(form: Ciudad){
    let ciudad = this.activeroute.snapshot.paramMap.get('id_ciudad');
    this.ciudad.putCiudad(form,ciudad).subscribe(datos=>{
      console.log(datos)
      Swal.fire('Ciudad Acualizado', 'Ciudad actualizada exitosamente', 'success');
      this.router.navigate(['ciudades']);
    })
  }

  regresar(){
    this.router.navigate(['ciudades']);
  }

}
