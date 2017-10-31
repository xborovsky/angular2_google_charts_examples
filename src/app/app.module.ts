import { MapChartComponent } from './map-chart/map-chart.component';
import { SteppedAreaChartComponent } from './stepped-area-chart/stepped-area-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartDirective } from './chart.directive';
import { HomeComponent } from './home/home.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routesConfig } from './routes-config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineChartComponent,
    ChartDirective,
    PieChartComponent,
    AreaChartComponent,
    BarChartComponent,
    ComboChartComponent,
    GaugeChartComponent,
    ScatterChartComponent,
    SteppedAreaChartComponent,
    MapChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
