import {Component} from '@angular/core';


@Component({
  selector: 'app-herore',
  templateUrl: 'heroe.component.html'

})

export class HeroeComponent {
   //aqui iran las propiedades
   nombre : string= 'Ironman';
   edad: number = 45;

   //metodo
   obtenerNombre(): string { 
    return `${this.nombre} - ${this.edad}`;

   }

   //propiedad procesado
   get nombreCapitalizado(): string {
    return this.nombre.toLocaleUpperCase();
   }

   cambiarNombre(): void {
    this.nombre =  'Spiderman';
   }

   cambiarEdad(): void {
    this.edad =  30;
   }


}