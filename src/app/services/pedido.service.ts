import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  public url:string ='http://localhost:2020/';

  constructor(private http:HttpClient) { }

  postPedido(pedido){
    return this.http.post<any>(this.url+'pedido/', pedido, {headers:this.htpHeaders});
  }

  
  
  
}
