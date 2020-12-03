import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  public url:string ='http://localhost:2020/';
  private urlempresa= this.url+'empresa/';

  constructor(private http:HttpClient) { 

  }

  getEmpresas(){
    return this.http.get<any>(this.urlempresa, {headers:this.htpHeaders});
  }
  
}
