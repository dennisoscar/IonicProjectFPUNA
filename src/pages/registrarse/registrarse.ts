import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {

  registrarse:FormGroup;

  constructor(

  public navCtrl: NavController,
  public formBuilder: FormBuilder) {
    this.registrarse=this.createRegistrarse();
  }
  saveData(){
    console.log(this.registrarse.value);
  }


  private createRegistrarse(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }

}
