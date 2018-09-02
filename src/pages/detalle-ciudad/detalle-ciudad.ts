import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleCiudadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-detalle-ciudad',
  templateUrl: 'detalle-ciudad.html',
})
export class DetalleCiudadPage {

   // Definimos una variable que representa el título de nuestro nuevo Page
  titlePage: string = 'Detalle';
  nombre: string = "";
  descripcion: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let detalleciudad = navParams.get("detalleCiudades");
    this.nombre=detalleciudad.nombre;
    this.descripcion=detalleciudad.descripcion;
  }


}

