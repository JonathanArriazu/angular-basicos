import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

/*   @Input() personajes : Personaje[] = []; */

  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private DbzService: DbzService ) {};

  /* cambiarNombre(event: any) {
    console.log(event.target.value);
  } */

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return; /* Para salir del metodo */
    }

    const nuevoPj = this.nuevo;
   
    /* this.personajes.push(nuevoPj); */
   /*  this.onNuevoPersonaje.emit(this.nuevo) */
   this.DbzService.agregarPersonaje(this.nuevo);

    this.nuevo= {
      nombre: '',
      poder: 0
    }

    /* console.log(this.personajes); */

  }
}
