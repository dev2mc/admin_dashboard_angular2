import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {TopbarComponent} from './TopbarComponent/topbar.component';
import {SearchComponent} from './SearchComponent/search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TopbarComponent, SearchComponent
  ],
  exports: [
    TopbarComponent, SearchComponent
  ]
})
export class TopbarModule {};
