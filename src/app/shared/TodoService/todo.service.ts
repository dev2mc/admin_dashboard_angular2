import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Todo} from '../TodoObjInterface/todo-obj.interface';

@Injectable()
export class TodoService {
  private _uri = 'https://api.mlab.com/api/1/databases/todo-items/collections/todos';
  private _apiKey = 'wYOXfeNqx8m2P7fxATUeF4QSU7qoC9RT';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){};

  getTodos(): Promise<Todo[]> {
    return this.http.get(`${this._uri}?apiKey=${this._apiKey}`)
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  addTodo(todo: Todo): Promise<Todo> {
    return this.http.post(`${this._uri}?apiKey=${this._apiKey}`, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  deleteTodo(id: string): Promise<Todo> {
    return this.http.delete(`${this._uri}/${id}?apiKey=${this._apiKey}`, {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  };

  toggleComplete(todo: Todo): Promise<Todo> {
    let id = todo._id.$oid;
    return this.http.put(`${this._uri}/${id}?apiKey=${this._apiKey}`, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then((response: any) => {
        return JSON.parse(response._body);
      });
  }
};
