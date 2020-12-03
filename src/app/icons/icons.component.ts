import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  empresas:any;
  constructor(private _EmpresasService:EmpresaService) { }

  ngOnInit() {
    this.listarEmpresas();
  }
listarEmpresas(){
  this._EmpresasService.getEmpresas().subscribe((data)=>{
    this.empresas = data;
  });
}
}
