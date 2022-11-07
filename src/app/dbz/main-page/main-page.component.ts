import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  /* agregar(event: any){
    event.preventDefault();
    console.log("Hola");
  } */

  /* interface Personaje {
    nombre: string;
    poder: number;
  } */
  
  /* personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 13000
    }
  ]; */

  /* cambiarNombre(event: any) {
    console.log(event.target.value);
  } */

  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1000
  }


/*   agregarNuevoPersonaje(argumento: Personaje) {
    console.log(argumento);
    this.personajes.push( argumento );
  } */

  constructor(private dbzService: DbzService) {
  }  // ==>Injeccion de dependencia: estamos injectando el servicio en el componente.

}
