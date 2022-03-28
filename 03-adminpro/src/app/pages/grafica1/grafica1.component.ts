import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {

  lables1 : string[] =  [ 'Pizza','Coca','Tacos' ];

  data1: ChartData<'doughnut'> = {
    labels: this.lables1,
    datasets: [
      { data: [ 10, 20, 40 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };
}
//Nota importante: pasar todo el array de data a la grafica si no no lo logro hacer funcionar