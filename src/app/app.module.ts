import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {routing} from './app.routing';

import {TopbarModule} from './TopbarModule/topbar.module';
import {MenubarModule} from './MenubarModule/menubar.module';
import {TasksModule} from './TasksModule/tasks.module';
import {DashboardModule} from './DashboardModule/dashboard.module';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './shared/404Component/404.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,

    routing,

    TopbarModule,
    MenubarModule,
    TasksModule,
    DashboardModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
