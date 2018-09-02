import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetallePage} from "../detalle/detalle";
import { CiudadesPage } from '../ciudades/ciudades';

/**
 * Generated class for the DepartamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  /**
 * Created by carlitos on 08/08/18
 */


@Component({
  selector: 'page-departamento',
  templateUrl: 'departamento.html'
})
export class DepartamentoPage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  titlePage: string = 'Departamento';
  departamentos: Array<any> = [];

  constructor(public navCtrl: NavController) {

    this.departamentos = [
      {nombre: "Central ", ciudades: [
        {
          nombre: "Asuncion",
          descripcion: "descripcion",
        },
        {
          nombre: "San Bernardino",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Paraguarí", ciudades: [
        {
          nombre: "Yaguaron",
          descripcion: "descripcion"
        },
        {
          nombre: "Paraguarí",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Cordillera", ciudades: [
        {
          nombre: "Caacupe",
          descripcion: "descripcion"
        },
        {
          nombre: "Tobati",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Guaira", ciudades: [
        {
          nombre: "Villarrica",
          descripcion: "descripcion"
        },
        {
          nombre: "Paraguarí",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Caaguazú", ciudades: [
        {
          nombre: "Campo 9",
          descripcion: "descripcion"
        },
        {
          nombre: "Paraguarí",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Caazapá", ciudades: [
        {
          nombre: "Yaguaron",
          descripcion: "descripcion"
        },
        {
          nombre: "Paraguarí",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Itapúa", ciudades: [
        {
          nombre: "Yaguaron",
          descripcion: "descripcion"
        },
        {
          nombre: "Paraguarí",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Misiones", ciudades: [
        {
          nombre: "Yaguaron",
          descripcion: "descripcion"
        },
        {
          nombre: "Paraguarí",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "San Pedro", ciudades: [
        {
          nombre: "xxxxxx",
          descripcion: "descripcion"
        },
        {
          nombre: "xxxxxx",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Alto Paraná", ciudades: [
        {
          nombre: "Yyyyyyyy",
          descripcion: "descripcion"
        },
        {
          nombre: "yyyyyyy",
          descripcion: "descripcion"
        }
      ]},  
      {nombre: "Concepción", ciudades: [
        {
          nombre: "ccccccc",
          descripcion: "descripcion"
        },
        {
          nombre: "ccccccc",
          descripcion: "descripcion"
        }
      ]},  
      {nombre: "Ñeembucú", ciudades: [
        {
          nombre: "ññññññññ",
          descripcion: "descripcion"
        },
        {
          nombre: "ññññññññ",
          descripcion: "descripcion"
        }
      ]},
      {nombre: "Amambay", ciudades: [
        {
          nombre: "aaaaaaaa",
          descripcion: "descripcion"
        },
        {
          nombre: "aaaaaaaa",
          descripcion: "descripcion"
        }
      ]},

         ]

  }

  verCiudades(departamento) {
      this.navCtrl.push(CiudadesPage, {ciudades: departamento.ciudades});
  }
  

}
