import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/dashboard/carrito', title: 'Carta',  icon:'shopping_bag-16', class: '' },
    // { path: '/dashboard/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    { path: '/dashboard/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    // { path: '/dashboard/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    // { path: '/dashboard/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    { path: '/dashboard/users', title : 'Users' , icon : 'text_caps-small', class: ''},
    { path: '/dashboard/pagos', title : 'Pagos' , icon : 'education_paper', class: ''}

];



export const ROUTESUSER: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/dashboard/carrito', title: 'Carta',  icon:'shopping_bag-16', class: '' },
    { path: '/dashboard/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/dashboard/pagos', title : 'Pagos' , icon : 'education_paper', class: ''}

];

@Component({ 
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  public menu:any;

  constructor() { }

  ngOnInit() {
    this.rutas()
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
  rutas(){
    let {rol} = JSON.parse(sessionStorage.getItem('usuario'))
    switch(rol){
      case "ROLE_ADMIN":
        this.menu = ROUTES;
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      break;
      case "ROLE_USER":
        this.menu = ROUTESUSER;
        this.menuItems = ROUTESUSER.filter(menuItem => menuItem);
      break;
    }
    
  }

}
