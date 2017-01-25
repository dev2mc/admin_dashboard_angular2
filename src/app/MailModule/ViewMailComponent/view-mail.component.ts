import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {MailService} from '../../shared/MailService/mail.service';

import {Mail} from '../../shared/MailObjInterface/mail-obj.interface';

let template = require('./view-mail.component.html');
let styles = require('./view-mail.component.scss');

@Component({
  selector: 'view-mail',
  template: template,
  styles: [styles]
})
export class ViewMailComponent implements OnInit {
  mailItem: Mail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mailService: MailService
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { mailItem: Mail }) => {
        this.mailItem = data.mailItem;
        this.markAsRead();
      });
  }

  markAsRead(): Promise<Mail> {
    let updatedItem = Object.assign({}, this.mailItem);

    updatedItem.read = true;
    this.mailItem.read = true;
    return this.mailService.updateMail(updatedItem).then((data) => {
      return data;
    });
  }

  toggleStarred(): Promise<Mail> {
    let updatedItem = Object.assign({}, this.mailItem);

    updatedItem.starred = !updatedItem.starred;
    this.mailItem.starred = !this.mailItem.starred;
    return this.mailService.updateMail(updatedItem).then((data) => {
      return data;
    })
  };

  resendMail() {
    let resentItem = Object.assign({}, this.mailItem);
    delete resentItem._id;
    return this.mailService.sendMail(resentItem).then((data) => {
      return data;
    });
  };

  getMailTime(ts: number): string {
    let currentDate = new Date(Date.now());
    let mailDate = new Date(ts);
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if ((currentDate.getDate() === mailDate.getDate()) && (currentDate.getMonth() === mailDate.getMonth()) && (currentDate.getFullYear() === mailDate.getFullYear())) {
        return `Today, ${mailDate.getHours()}:${mailDate.getMinutes()}`
    } else {
      let monthNumber = mailDate.getMonth();
      return `${monthNames[monthNumber]} ${mailDate.getDate()}, ${mailDate.getHours()}:${mailDate.getMinutes()}`;
    }
  };

  deleteMail(id: string):void {
    this.mailService.deleteMail(id).then(() => {
      this.goBack();
    })
  }

  goBack():void {
    this.router.navigate(['/mail']);
  }
}
