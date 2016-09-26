import { Component } from '@angular/core';
import '../../public/scss/styles.scss';

let styles = require('./app.component.scss');


@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  template: `
    <div class='app-wrapper'>
      <header class='app-header'>
        <topbar></topbar>
      </header>
      <div class='content-wrapper'>
        <aside class='app-aside'>

        </aside>
        <main class='app-main'>

        </main>
      </div>
  <div>
  `,
  styles: [styles]
})
export class AppComponent { }
