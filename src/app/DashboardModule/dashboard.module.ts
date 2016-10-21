import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';

import {DashboardComponent} from './DashboardComponent/dashboard.component';
import {UpdateComponent} from './UpdateComponent/update.component';
import {YearlySalesComponent} from '../shared/YearlySalesComponent/yearly-sales.component';
import {WeatherComponent} from './WeatherComponent/weather.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    UpdateComponent,
    YearlySalesComponent,
    WeatherComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {};
