import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url:string ='http://localhost:2020/';
  private urlmenu= this.url+'usuario/';

  constructor(private http:HttpClient){

  }

  
}
