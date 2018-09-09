import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleEspaciosVerdesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle-espacios-verdes',
  templateUrl: 'detalle-espacios-verdes.html',
})
export class DetalleEspaciosVerdesPage {


  // Definimos una variable que representa el título de nuestro nuevo Page
  titlePage: string = 'Detalle';
  nombre: string = "";
  descripcion: string = "";
  direccion: string="";
  accesibilidad: string="";
  costo: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let detalleEspacioVerde = navParams.get("detalleEspaciosVerdes");
    this.nombre = detalleEspacioVerde.nombre;
    this.descripcion = detalleEspacioVerde.descripcion;
    this.accesibilidad = detalleEspacioVerde.accesibilidad;
    this.costo = detalleEspacioVerde.costo;
  }




}
