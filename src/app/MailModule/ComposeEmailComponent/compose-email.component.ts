import {Component, OnInit, ChangeDetectorRef, ElementRef, ViewEncapsulation} from '@angular/core';

import {Router} from '@angular/router';

import {MailService} from '../../shared/MailService/mail.service';
import {WindowRefService} from '../../shared/WindowRefService/window-ref.service';
import {DocumentRefService} from '../../shared/DocumentRefService/document-ref.service';

import {Mail} from '../../shared/MailObjInterface/mail-obj.interface';

const template = require('./compose-email.component.html');
const styles = require('./compose-email.component.scss');

@Component({
  selector: 'compose-email',
  template: template,
  styles: [styles],
  encapsulation: ViewEncapsulation.None
})
export class ComposeEmailComponent implements OnInit {
  content: HTMLElement;
  defaultMail: Mail = {
    fromName: 'you',
    fromAddress: 'your@mail.com',
    to: '',
    category: '',
    subject: '',
    date: 0,
    body: '',
    sent: true,
    starred: false,
    read: true,
    openedTimes: 1
  };

  constructor(
    private el:ElementRef,
    private router:Router,
    private mailService:MailService
  ) {}

  ngOnInit(): void {
    this.content = this.el.nativeElement.querySelector('.compose-email__content');
  }

  goToMail():void {
    this.router.navigate(['/mail']);
  }

  sendEmail(): void {
    let timeNow = Date.now();
    this.defaultMail.date = timeNow;
    this.mailService.sendMail(this.defaultMail).then(()=>{this.goToMail()});
  }
}
