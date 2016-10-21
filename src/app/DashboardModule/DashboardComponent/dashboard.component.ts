import {Component} from '@angular/core';

let template = require('./dashboard.component.html');
let styles = require('./dashboard.component.scss');

@Component({
  selector: 'dashboard',
  template: template,
  styles: [styles]
})
export class DashboardComponent {
  constructor(){};

  twitterMentions: number = 400;
  sales: number = 13140;
  visitors: number = 9001;
  messages: number = 350;

  yearlySales: number = 530.030;
  yearlyVisitors: number = 4204284;
  yearlyCustomers: number = 42000;

  weatherType: string = 'sunny';
  weatherTemperature: number = 25;
  weatherLocation: string = 'texas';

  hostingCount: number = 113;
  hostingMax: number = 200;
  emailCount: number = 535;
  emailMax: number = 986;
}
