import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({ 
    declarations: [
        HeroeComponent,
        ListadoComponent
  
    ], 
    imports: [
      HeroeModule, 
      BrowserModule,
      


    ],
    providers: [],
    bootstrap: [ListadoComponent]
})
export class HeroeModule{}