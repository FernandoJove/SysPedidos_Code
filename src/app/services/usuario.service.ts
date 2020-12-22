import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url:string ='http://192.168.194.157:2020/';
  private urlmenu= this.url+'usuario/';

  constructor(private http:HttpClient){

  }

  
}
