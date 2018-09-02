import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {DenunciasPage} from "../pages/denuncias/denuncias";
import {ListadoPage} from "../pages/listado/listado";
import {LoginPage} from "../pages/login/login";
import {DepartamentoPage} from "../pages/departamento/departamento";
import {CiudadesPage} from "../pages/ciudades/ciudades";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{component: any, nombre: string}> = [];

  constructor(platform: Platform, statusBar: StatusBar,
              public menu: MenuController, splashScreen: SplashScreen) {
    //Las páginas que se mostrarán en el menú
    this.pages = [
      {component: HomePage, nombre: 'Inicio'},
      {component: DenunciasPage, nombre: 'Agregar denuncia'},
      {component: ListadoPage, nombre: 'Listado de Departamentos*'},
      {component: DepartamentoPage, nombre: 'Listado de Departamentos'},
      {component: CiudadesPage, nombre: 'Listado de Ciudades'}
    ];

    platform.ready().then(() => {
      // Se controla que los plugins estén cargados
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina(pagina){
    //Se cierra el menú
    this.menu.close();
  //Se usa setRoot para que no aparezca el botón de atrás
    this.nav.setRoot(pagina.component);
  }
}

