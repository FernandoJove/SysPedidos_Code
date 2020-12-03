import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  public url:string ='http://localhost:2020/';

  constructor(private http:HttpClient){}

  }
