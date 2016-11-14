import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

import {MailService} from '../../shared/MailService/mail.service';

import {Mail} from '../../shared/MailObjInterface/mail-obj.interface';

let template = require('./mail.component.html');
let styles = require('./mail.component.scss');

@Component({
  selector: 'mail',
  template: template,
  styles: [styles]
})
export class MailComponent implements OnInit {
  mails: Mail[] = [];
  selectedIds: string[] = [];
  showInfo: boolean = false;

  constructor(private mailService:MailService, private cd:ChangeDetectorRef){};

  ngOnInit(): void {
    this.getMails().then(() => {
      this.getUnreadCount();
    })

  };

  getMails(): Promise<Mail[]> {
    return this.mailService.getMails().then((data) => {
      return this.mails = data;
    });
  };

  toggleStarred(id: string): Promise<Mail> {
    let itemIndex: number;
    let item: Mail;
    for (let i = 0; i < this.mails.length; i++) {
      if (this.mails[i]._id.$oid === id) {
        itemIndex = i;
        item = Object.assign({}, this.mails[i]);
        break;
      }
    }
    if (item) {
      item.starred = !item.starred;
      return this.mailService.updateMail(item).then((data) => {
        this.mails[itemIndex] = data;
        this.cd.detectChanges();
        return data;
      })
    }
  };

  toggleReadMail(id: string): Promise<Mail> {
    let itemIndex: number;
    let item: Mail;
    for (let i = 0; i < this.mails.length; i++) {
      if (this.mails[i]._id.$oid === id) {
        itemIndex = i;
        item = Object.assign({}, this.mails[i]);
        break;
      }
    }
    if (item) {
      item.read = !item.read;
      return this.mailService.updateMail(item).then((data) => {
        this.mails[itemIndex] = data;
        this.cd.detectChanges();
        return data;
      })
    }
  };

  markAsRead(id: string): Promise<Mail> {
    let itemIndex: number;
    let item: Mail;
    for (let i = 0; i < this.mails.length; i++) {
      if (this.mails[i]._id.$oid === id) {
        itemIndex = i;
        item = Object.assign({}, this.mails[i]);
        break;
      }
    }
    if (item) {
      item.read = false;
      return this.mailService.updateMail(item).then((data) => {
        this.mails[itemIndex] = data;
        this.cd.detectChanges();
        return data;
      })
    }
  }

  deleteMail(id: string): Promise<Mail> {
    let itemIndex: number;
    for (let i = 0; i < this.mails.length; i++) {
      if (this.mails[i]._id.$oid === id) {
        itemIndex = i;
        break;
      }
    }
    return this.mailService.deleteMail(id).then((data) => {
      this.mails.splice(itemIndex, 1);
      this.cd.detectChanges();
      return data;
    });
  };

  sendMail(mail: Mail): Promise<Mail> {
    return this.mailService.sendMail(mail).then((data) => {
      this.mails.push(data);
      this.cd.detectChanges();
      return data;
    })
  };

  encreaseOpened(id: string): Promise<Mail> {
    let itemIndex: number;
    let item: Mail;
    for (let i = 0; i < this.mails.length; i++) {
      if (this.mails[i]._id.$oid === id) {
        itemIndex = i;
        item = Object.assign({}, this.mails[i]);
        break;
      }
    }
    if (item) {
      item.openedTimes = item.openedTimes + 1;
      return this.mailService.updateMail(item).then((data) => {
        this.mails[itemIndex] = data;
        this.cd.detectChanges();
        return data;
      })
    }
  }

  deleteMailGroup(): void {
    let promiseArr:any = [];

    this.selectedIds.forEach((v, i) => {
      let prom = this.deleteMail(v).then(() => {
        this.selectedIds.splice(i, 1);
      })
      promiseArr.push(prom);
    });
    Promise.all(promiseArr).then(() => {
      this.selectedIds = [];
    })
  };

  toggleStarredGroup(): void {
    let promiseArr:any = [];

    this.selectedIds.forEach((v, i) => {
      let prom = this.toggleStarred(v).then(() => {
        this.selectedIds.splice(i, 1);
      })
      promiseArr.push(prom);
    });
    Promise.all(promiseArr).then(() => {
      this.selectedIds = [];
    })
  };

  toggleReadGroup(): void {
    let promiseArr:any = [];

    this.selectedIds.forEach((v, i) => {
      let prom = this.toggleReadMail(v).then(() => {
        this.selectedIds.splice(i, 1);
      })
      promiseArr.push(prom);
    });

    Promise.all(promiseArr).then(() => {
      this.selectedIds = [];
    })
  };

  getMailTime(ts: number): string {
    let currentDate = new Date(Date.now());
    let mailDate = new Date(ts);
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if ((currentDate.getDate() === mailDate.getDate()) && (currentDate.getMonth() === mailDate.getMonth()) && (currentDate.getFullYear() === mailDate.getFullYear())) {
        return `${mailDate.getHours()}:${mailDate.getMinutes()}`
    } else {
      let monthNumber = mailDate.getMonth();
      return `${monthNames[monthNumber]} ${mailDate.getDate()}`
    }
  };

  addToSelectedIds(id: string): void {
    if (this.selectedIds.indexOf(id) === -1) {
      this.selectedIds.push(id);
      this.cd.detectChanges();
    } else {
      let ind = this.selectedIds.indexOf(id);
      this.selectedIds.splice(ind, 1);
      this.cd.detectChanges();
    }
  };

  showIfSelected(id: string): boolean {
    if (this.selectedIds.indexOf(id) > -1) {
      return true;
    } else {
      return false;
    }
  };

  getUnreadCount(): number {
    let count: number = 0;

    this.mails.forEach((v) => {
      if (v.read === false) {
        count = count + 1;
      }
    });

    return count;
  }

  getSelectedStarredCount(): number {
    let starred = this.mails.filter((v) => {
      return ((this.selectedIds.indexOf(v._id.$oid) > -1) && (v.starred === true))
    }).length;

    return starred;
  }

  toggleShowInfo(): void {
    this.showInfo = !this.showInfo;
  }

  getMailDateInfo() {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let itemId = this.selectedIds[0];

    let item = this.mails.filter((v) => {
      return v._id.$oid === itemId;
    })[0];

    let date = new Date(item.date);
    console.log(date);
    let monthNumber = date.getMonth();
    let action = item.fromName==='you'?'Sent':'Arrived';

    return `${action} at: ${monthNames[monthNumber]} ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  }
}
