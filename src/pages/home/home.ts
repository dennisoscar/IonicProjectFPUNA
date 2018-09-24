import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DenunciasPage} from "../denuncias/denuncias";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  galleryType = "regular";
  lugaresRecomendados = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg"
  ];
  grid = true;
  constructor(public navCtrl: NavController) {}

  goToDenuncias() {
    // NavController es la clase que nos permite navegar entre Pages de nuestra APP
    this.navCtrl.push(DenunciasPage);
  }
}
