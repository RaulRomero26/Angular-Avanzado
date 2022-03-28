import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number ){
    if(this.progreso+valor>=0 && this.progreso+valor<=100){
      this.progreso+=valor;
      this.valorSalida.emit(this.progreso);
    }
  }

  onChange( nuevoValor:number ){
    // if( nuevoValor >= 100 ){
    //   this.progreso = 100;
    // }else if( nuevoValor <= 0){
    //   this.progreso = 0;
    // }else {
    //   this.progreso = nuevoValor;
    // } 
    //COMENTARIO IMPORTANTE :
    // Si se descomenta no aplica el css de is invalid por que nunca toma esos valores mas de 100 menos de 0 
    this.valorSalida.emit(this.progreso);
  }
}
