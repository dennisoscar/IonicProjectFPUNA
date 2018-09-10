import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';

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


  // Definimos una variable que representa el título de nuestro nuevo Page y los datos a recibir 
  titlePage: string = 'Detalle';
  nombre: string = "";
  descripcion: string = "";
  direccion: string="";
  accesibilidad: string="";
  costo: string="";
  imagen: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let detalleEspacioVerde = navParams.get("detalleEspaciosVerdes");
    this.nombre = detalleEspacioVerde.nombre;
    this.descripcion = detalleEspacioVerde.descripcion;
    this.accesibilidad = detalleEspacioVerde.accesibilidad;
    this.costo = detalleEspacioVerde.costo;
    this.imagen= detalleEspacioVerde.imagen;
  }




}
