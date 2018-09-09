/**
 * Created by Oscarcito 
 */

import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  titlePage: string = 'Detalle';
  nombre: string = "";
  asunto: string = "";
  descripcion: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let denuncia = navParams.get("denuncia");
    this.nombre = denuncia.nombre;
    this.asunto = denuncia.asunto;
    this.descripcion = denuncia.descripcion;

  }


}
