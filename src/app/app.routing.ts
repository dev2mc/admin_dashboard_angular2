import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TasksComponent} from './TasksModule/TasksComponent/tasks.component';
import {DashboardComponent} from './DashboardModule/DashboardComponent/dashboard.component';
import {NotFoundComponent} from './shared/404Component/404.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
