import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  public chartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540] ];

  public chartOptions  = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: 900,
    height: 500
  };

  constructor() { }

}
