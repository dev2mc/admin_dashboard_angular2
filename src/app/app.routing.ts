import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TasksComponent} from './TasksModule/TasksComponent/tasks.component';
import {DashboardComponent} from './DashboardModule/DashboardComponent/dashboard.component';
import {MailComponent} from './MailModule/MailComponent/mail.component';
import {NotFoundComponent} from './shared/404Component/404.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/mail',
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
    path: 'mail',
    component: MailComponent
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
