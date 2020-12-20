import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  htpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  public url:string ='http://localhost:2020/';
  private urlmenu= this.url+'menu/';

  constructor(private http:HttpClient){

  }
  getMenuByEmpresa(idEmpresa:number){
    
    return this.http.get<any>(this.urlmenu+idEmpresa, {headers:this.htpHeaders});
  }

  listMenus(){
    return  this.http.get<any>(this.urlmenu, {headers:this.htpHeaders});
  }

 

}
 