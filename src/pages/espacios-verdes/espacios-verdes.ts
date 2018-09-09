import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleCiudadPage } from '../detalle-ciudad/detalle-ciudad';
import { DetalleEspaciosVerdesPage } from '../detalle-espacios-verdes/detalle-espacios-verdes';

/**
 * Generated class for the EspaciosVerdesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-espacios-verdes",
  templateUrl: "espacios-verdes.html"
})
export class EspaciosVerdesPage {
  espaciosVerdes: Array<any> = [];
  espaciosVerdesiniciales: Array<any> = [];

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    console.log(navParams.get("espaciosVerdes"));
    this.espaciosVerdesiniciales = navParams.get("espaciosVerdes");

    this.initializeEspaciosVerdes();
  }

  initializeEspaciosVerdes() {
    this.espaciosVerdes = Object.assign([], this.espaciosVerdesiniciales);
  }

  getEspaciosVerdes(ev) {
    // Reset items back to all of the items
    this.initializeEspaciosVerdes();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.espaciosVerdes = this.espaciosVerdes.filter(espacioVerde => {
        return (
          espacioVerde.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }

  verDetalleEspacioVerde(espacioVerde) {
    this.navCtrl.push(DetalleEspaciosVerdesPage, {
      detalleEspaciosVerdes: espacioVerde
    });
  }
}