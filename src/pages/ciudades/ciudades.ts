import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetalleCiudadPage } from '../detalle-ciudad/detalle-ciudad';

/**
 * Generated class for the CiudadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ciudades',
  templateUrl: 'ciudades.html',
})
export class CiudadesPage {

  ciudades: Array<any> = [];
  ciudadesiniciales: Array<any> = [];

  constructor(public navParams: NavParams,public navCtrl: NavController) {
    console.log(navParams.get("ciudades"));
    this.ciudadesiniciales = navParams.get("ciudades");

    this.initializeCiudades();
  }

  initializeCiudades() {
    this.ciudades = [
      {nombre:'Amsterdam'},
      {nombre:'Amsterdam'},
      {nombre:'Amsterdam'},
      {nombre:'Amsterdam'},
      {nombre:'Amsterdam'},
      {nombre:'Amsterdam'},
      {nombre:'Amsterdam'},
      {nombre:'Amsterdam'},
      {nombre:'Amsterdam'},
    ];
    this.ciudades  = Object.assign([], this.ciudadesiniciales);
  }

  getCiudades(ev) {
    // Reset items back to all of the items
    this.initializeCiudades();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.ciudades = this.ciudades.filter((ciudad) => {
        return (ciudad.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  verDetalleCiudad(ciudad) {
    this.navCtrl.push(DetalleCiudadPage, {detalleCiudades: ciudad });
    
}

}