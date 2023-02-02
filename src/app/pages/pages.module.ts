import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
  ],
 exports: [
  PagesComponent,
  DashboardComponent,
  ProgressComponent,
  Grafica1Component,
 ],
  imports: [
    CommonModule, //IMPORTANTE
    SharedModule, //Se importa en sharedModule y no en el modulo principal (app.module) porque los compnentes y servicios de este modulo no seran usados en nada que tenga que ver con el auth (pues son header y footer y sidebar) solo es necesario importarlos en pages.module pues aqui siempre estaran presentes
    AppRoutingModule, //ES NECESARIO IMPORTAR EL ROUTING MODULE SINO EL <router-outlet></router-outlet> NO FUNCIONARA
    FormsModule,
    ComponentsModule,
    ChartsModule
  ]

})
export class PagesModule { }


/* Este código define un módulo de páginas en Angular usando la decoración @NgModule. La propiedad 
"declarations" contiene una lista de componentes que pertenecen a este módulo y que están disponibles 
para ser utilizados dentro de este módulo. La propiedad "exports" contiene una lista de componentes que 
están disponibles para ser utilizados por otros módulos que importen este módulo.
En este ejemplo, el módulo de páginas está declarando y exportando cuatro componentes: PagesComponent,
 DashboardComponent, ProgressComponent y Grafica1Component. Esto significa que estos componentes pueden
  ser utilizados dentro de este módulo y también pueden ser importados y utilizados por otros módulos.*/