import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadService } from 'src/app/services/ciudad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-ciudad',
  templateUrl: './listar-ciudad.component.html',
  styleUrls: ['./listar-ciudad.component.css']
})
export class ListarCiudadComponent implements OnInit {

  ciudad : Ciudad[] = [];

  constructor(private ciudadService: CiudadService, private router: Router) { }

  ngOnInit(): void {
    this.cargarCiudades();
  }

  cargarCiudades(){
    this.ciudadService.obtenerCiudad().subscribe(info=> {
      this.ciudad = info;
      console.log(this.ciudad);
    })
  }

  nuevaCiudad(){
    this.router.navigate(['ciudades/ciudad']);
  }


  editarCiudad(id_ciudad: any){
    this.router.navigate(['ciudades/editarCiudad', id_ciudad])
  }

  eliminarCiudad(id_ciudad: any){
    this.ciudadService.eliminarCiudad(id_ciudad).subscribe(fin=> {
      this.cargarCiudades()
      Swal.fire('Ciudad Eliminado', 'Ciudad eliminada con exito', 'success');
      console.log(fin)
    })
  }

  regresar(){
    this.router.navigate(['']);
  }

  usuarios(){
    this.router.navigate(['usuarios'])
  }

}
