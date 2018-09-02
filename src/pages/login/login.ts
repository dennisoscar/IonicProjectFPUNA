import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DenunciasPage} from "../denuncias/denuncias";
import {HomePage} from "../home/home";
import {RegistrarsePage} from "../registrarse/registrarse";




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToDenuncias() {
    // NavController es la clase que nos permite navegar entre Pages de nuestra APP
    this.navCtrl.push(DenunciasPage);
  }
  goToHome() {
    // NavController es la clase que nos permite navegar entre Pages de nuestra APP
    this.navCtrl.setRoot(HomePage );
  }
  goToRegistrarse() {
    // NavController es la clase que nos permite navegar entre Pages de nuestra APP
    this.navCtrl.push(RegistrarsePage );
  }

}
