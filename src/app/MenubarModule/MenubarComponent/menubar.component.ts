import {Component, OnInit, ChangeDetectorRef, ApplicationRef, NgZone} from '@angular/core';

import {WindowRefService} from '../../shared/WindowRefService/window-ref.service';

let template = require('./menubar.component.html');
let styles = require('./menubar.component.scss');

interface menuItem {
  icon: string,
  name: string,
  link: string,
  number: string|boolean
}

@Component({
  selector: 'menubar',
  template: template,
  styles: [styles],
})
export class MenubarComponent implements OnInit {
  menuDataArr: menuItem[] = [
    {
      icon: 'fa-tasks',
      name: 'tasks',
      link: 'tasks',
      number: false
    },
    {
      icon: 'fa-comment',
      name: 'comment',
      link: 'comments',
      number: '9'
    }
  ];
  collapsed: boolean = false;

  constructor(private winRef: WindowRefService, private zone: NgZone){};

  resizeMenubar(): void {
    if (this.winRef.nativeWindow.innerWidth < 991) {
      this.collapsed = true;
      this.zone.run(()=>{console.log('NgZone.run() has been invoked')});
    } else {
      this.collapsed = false;
      this.zone.run(()=>{console.log('NgZone.run() has been invoked')});
    }
  }

  ngOnInit(): void {
    this.winRef.nativeWindow.addEventListener('resize', this.resizeMenubar.bind(this));
    this.resizeMenubar();
  }
}
