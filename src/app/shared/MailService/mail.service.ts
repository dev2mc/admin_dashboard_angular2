import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Mail} from '../MailObjInterface/mail-obj.interface';

@Injectable()
export class MailService {
  private _uri = 'https://api.mlab.com/api/1/databases/mail/collections/mail';
  private _apiKey = 'wYOXfeNqx8m2P7fxATUeF4QSU7qoC9RT';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){};

  getMails(): Promise<Mail[]> {
    return this.http.get(`${this._uri}?apiKey=${this._apiKey}`)
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  getMail(id: string): Promise<Mail> {
    return this.http.get(`${this._uri}/${id}?apiKey=${this._apiKey}`, {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  sendMail(task: Mail): Promise<Mail> {
    return this.http.post(`${this._uri}?apiKey=${this._apiKey}`, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  updateMail(task: Mail): Promise<Mail> {
    let id = task._id.$oid;
    return this.http.put(`${this._uri}/${id}?apiKey=${this._apiKey}`, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  deleteMail(id: string): Promise<Mail> {
    return this.http.delete(`${this._uri}/${id}?apiKey=${this._apiKey}`, {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };
}
