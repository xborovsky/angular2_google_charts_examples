import { Component } from '@angular/core';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent {
  public chartData = [
    ['Label', 'Value'],
    ['Memory', 80],
    ['CPU', 55],
    ['Network', 68]
  ];
  public chartOptions = {
    width: 400,
    height: 120,
    redFrom: 90,
    redTo: 100,
    yellowFrom:75,
    yellowTo: 90,
    minorTicks: 5
  };

  constructor() { }

}
