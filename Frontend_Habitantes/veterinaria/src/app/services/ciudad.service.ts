import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8000/api/ciudad/"

  obtenerCiudad():Observable<Ciudad[]>{
    let ruta = this.url;
    return this.http.get<Ciudad[]>(ruta);
  }

  //metodo para llamar una sola ciudad
  extraerCiudad(id:any):Observable<Ciudad>{
    let ruta1 = this.url+id+'/';
    return this.http.get<Ciudad>(ruta1)
  }

  //poner informacion actulizada de una ciudad
  putCiudad(form:Ciudad, id:any):Observable<Ciudad>{
    let ruta2 = this.url+id+'/';
    return this.http.put<Ciudad>(ruta2, form)
  }

  //metodo para agregar ciudad
  agregarCiudad(form: Ciudad):Observable<Ciudad>{
    let way = this.url;
    return this.http.post<Ciudad>(way,form)
  }

  //metodo para eliminar un ciudad
  eliminarCiudad(id_ciudad:number):Observable<Ciudad>{
    let ruta2 = this.url+id_ciudad+'/';

    return this.http.delete<Ciudad>(ruta2, {
      headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
    })
  }

}