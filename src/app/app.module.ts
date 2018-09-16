import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DenunciasPage} from "../pages/denuncias/denuncias";
import {ListadoPage} from "../pages/listado/listado";
import {DetallePage} from "../pages/detalle/detalle";
import {DepartamentoPage} from "../pages/departamento/departamento";
import {LoginPage} from "../pages/login/login";
import {RegistrarsePage} from "../pages/registrarse/registrarse";
import { CiudadesPage } from '../pages/ciudades/ciudades';
import { DetalleCiudadPage } from '../pages/detalle-ciudad/detalle-ciudad';
import { EspaciosVerdesPage } from '../pages/espacios-verdes/espacios-verdes';
import { DetalleEspaciosVerdesPage } from '../pages/detalle-espacios-verdes/detalle-espacios-verdes';
import { IonicImageViewerModule } from "ionic-img-viewer";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DenunciasPage, // Agregamos el nombre de nuestro nuevo Page
    ListadoPage,
    DetallePage,
    DepartamentoPage,
    LoginPage,
    RegistrarsePage,
    CiudadesPage,
    DetalleCiudadPage,
    EspaciosVerdesPage,
    DetalleEspaciosVerdesPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), IonicImageViewerModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DenunciasPage, // Agregamos el nombre de nuestro nuevo Page
    ListadoPage,
    DetallePage,
    DepartamentoPage,
    LoginPage,
    RegistrarsePage,
    CiudadesPage,
    DetalleCiudadPage,
    EspaciosVerdesPage,
    DetalleEspaciosVerdesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
