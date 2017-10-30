import { Component } from '@angular/core';

@Component({
  selector: 'app-stepped-area-chart',
  templateUrl: './stepped-area-chart.component.html',
  styleUrls: ['./stepped-area-chart.component.css']
})
export class SteppedAreaChartComponent {
  public chartData = [
    ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
    ['Alfred Hitchcock (1935)', 8.4,         7.9],
    ['Ralph Thomas (1959)',     6.9,         6.5],
    ['Don Sharp (1978)',        6.5,         6.4],
    ['James Hawes (2008)',      4.4,         6.2]
  ];
  public chartOptions = {
    title: 'The decline of \'The 39 Steps\'',
    vAxis: {title: 'Accumulated Rating'},
    isStacked: true,
    width: 900,
    height: 500
  };

  constructor() { }

}
