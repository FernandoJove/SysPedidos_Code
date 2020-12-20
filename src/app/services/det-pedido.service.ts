import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetPedidoService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  public url:string ="http://localhost:2020/";

  constructor(private http:HttpClient) { }

  postDet_Pedido(det_pedido){
    return this.http.post<any>(this.url+'det_pedido/', det_pedido, {headers:this.htpHeaders});
  }

}
