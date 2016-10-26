import {Component, OnInit} from '@angular/core';

import {TodoService} from '../../shared/TodoService/todo.service';

import {Todo} from '../../shared/TodoObjInterface/todo-obj.interface';

let template = require('./todo.component.html');
let styles = require('./todo.component.scss');

@Component({
  selector: 'todo',
  template: template,
  styles: [styles]
})
export class TodoComponent implements OnInit {
  showAdd: boolean = false;
  todos: Todo[];
  boilerplateTodo: Todo = {
    description: '',
    completed: false
  };

  constructor(private todoService:TodoService){};

  ngOnInit() {
    this.getTodos();
  };

  getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos()
      .then((data) => {
        this.todos = data;
        return this.todos;
      });
  };

  addTodo(todo: Todo): Promise<Todo> {
    return this.todoService.addTodo(todo)
      .then((data) => {
        this.todos.push(data);
        return data;
      });
  };

  deleteTodo(id: string): Promise<Todo> {
    return this.todoService.deleteTodo(id)
      .then((data) => {
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i]._id.$oid === id) {
            this.todos.splice(i, 1);
            break;
          }
        }
        return data;
      });
  };

  toggleComplete(id: string) {
    let complTodo: Todo;
    let complTodoInd: number;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i]._id.$oid === id) {
        complTodo = Object.assign({}, this.todos[i]);
        complTodo.completed = !complTodo.completed;
        complTodoInd = i;
        break;
      }
    }

    if (complTodo) {
      return this.todoService.toggleComplete(complTodo).then((data:Todo) => {
        this.todos[complTodoInd] = Object.assign({}, data);
      });
    }
  };

  resetBoilerplateTodo() {
    this.boilerplateTodo = {
      description: '',
      completed: false
    };
  };

  toggleShowAdd(): void {
    this.showAdd = !this.showAdd;
  };
}
