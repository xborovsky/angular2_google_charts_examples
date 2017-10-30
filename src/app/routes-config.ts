import { SteppedAreaChartComponent } from './stepped-area-chart/stepped-area-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routesConfig:Routes = [
    { path : '', redirectTo : 'home', pathMatch : 'full' },
    { path : 'home', component : HomeComponent },
    { path : 'line', component : LineChartComponent },
    { path : 'pie', component : PieChartComponent },
    { path : 'area', component : AreaChartComponent },
    { path : 'bar', component : BarChartComponent },
    { path : 'combo', component : ComboChartComponent },
    { path : 'gauge', component : GaugeChartComponent},
    { path : 'scatter', component : ScatterChartComponent},
    { path : 'stepped-area', component : SteppedAreaChartComponent }
];