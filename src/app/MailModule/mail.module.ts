import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {MailComponent} from './MailComponent/mail.component';

import {MailService} from '../shared/MailService/mail.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    MailComponent
  ],
  providers: [
    MailService
  ],
  exports: [MailComponent]
})
export class MailModule {};
