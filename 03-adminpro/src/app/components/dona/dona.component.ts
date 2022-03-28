import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin Título';

  // @Input() data = [350, 450, 100];

 // Doughnut
 @Input() labels: string[] = [
  'Label1',
  'Label2',
  'Label33',
];
@Input('data') doughnutChartData: ChartData<'doughnut'> = {
  labels: this.labels,
  datasets: [
     {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
     },
    
  ],
};
public doughnutChartType: ChartType = 'doughnut';

}
