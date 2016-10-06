import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Task} from '../TaskObjInterface/task-obj.interface.ts';

@Injectable()
export class TasksService {
  private _uri = 'https://api.mlab.com/api/1/databases/dashboard_tasks/collections/tasks';
  private _apiKey = 'wYOXfeNqx8m2P7fxATUeF4QSU7qoC9RT';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){};

  getTasks(): Promise<Task[]> {
    return this.http.get(`${this._uri}?apiKey=${this._apiKey}`)
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  addTask(task: Task): Promise<Task> {
    return this.http.post(`${this._uri}?apiKey=${this._apiKey}`, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  updateTask(task: Task): Promise<Task> {
    let id = task._id.$oid;
    return this.http.put(`${this._uri}/${id}?apiKey=${this._apiKey}`, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  deleteTask(id: string): Promise<Task> {
    return this.http.delete(`${this._uri}/${id}?apiKey=${this._apiKey}`, {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };
};
