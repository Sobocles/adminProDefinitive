import { Component, Input, Output, EventEmitter,  OnInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') progreso: number = 40; //se le asigna un valor de 40

  @Input() btnClass: string = "btn-primary"; //clase que va a tener por defecto

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

 cambiarValor( valor: number ){

  if( this.progreso >= 100 && valor >= 0 ){
    this.valorSalida.emit(100); // si un componente tiene una barra de progreso y se llega al 100%, se puede utilizar "valorSalida.emit" para notificar a otros componentes de que la barra de progreso ha alcanzado el 100% y deben realizar alguna acción adicional.
      return this.progreso = 100; //Finalmente, se establece la propiedad "progreso" en 100.
  }

  if( this.progreso <= 0 && valor < 0 ){
    this.valorSalida.emit(0);
    return this.progreso = 0;
  }

    this.progreso =  this.progreso + valor;
    this.valorSalida.emit( this.progreso )


    
 }
    onChange( nuevoValor: number ){
        if(nuevoValor >= 100 ){
          this.progreso = 100;
        } else if ( nuevoValor <= 0 ){
          this.progreso = 0;
        } else{
          this.progreso = nuevoValor;
        }
          this.valorSalida.emit( this.progreso );
        }

    }


