  /**
 * Created by carlitos on 08/08/18
 */

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetallePage} from "../detalle/detalle";

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  titlePage: string = 'Listado';
  denuncias: Array<{nombre: string, asunto: string, descripcion: string}> = [];

  constructor(public navCtrl: NavController) {

    this.denuncias = [
      {nombre: "Central ", asunto: "Asunto 11", descripcion: "Lorem ipsum ..."},
      {nombre: "Paraguarí", asunto: "Asunto 9", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Cordillera", asunto: "Asunto 3", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Guaira", asunto: "Asunto 4", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Caaguazú", asunto: "Asunto 5", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Caazapá", asunto: "Asunto 6", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Itapúa", asunto: "Asunto 7", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Misiones", asunto: "Asunto 8", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "San Pedro", asunto: "Asunto 2", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Alto Paraná", asunto: "Asunto 10", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Concepción", asunto: "Asunto 1", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Ñeembucú", asunto: "Asunto 12", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Amambay", asunto: "Asunto 13", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Canindeyú", asunto: "Asunto 14", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Presidente Hayes", asunto: "Asunto 15", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Boquerón", asunto: "Asunto 16", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
      {nombre: "Alto Paraguay", asunto: "Asunto 17", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel efficitur augue. Nunc a iaculis erat. Etiam nec diam non lorem tincidunt feugiat vel non orci. Phasellus convallis, purus eu mattis ornare, velit odio feugiat ex, id scelerisque libero risus id nisl. Donec in ligula mattis, tempus nulla condimentum, interdum nisi."},
         ]

  }

  verDetalle(denuncia) {
      this.navCtrl.push(DetallePage, {denuncia: denuncia});
  }

}
