import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitán America"];
  heroeBorrado: string = "";

  borrarHeroe() {
    const heroeBorrado = this.heroes.pop();
    console.log("Se borro a " + heroeBorrado + " de la lista.")
    this.heroeBorrado = heroeBorrado || "";     /* el this.heroesBorrado hace referencia al heroeBorrado de la linea 10 */
  }
}
