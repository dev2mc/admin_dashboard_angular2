import { TestBed, ComponentFixture } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import { AppComponent } from './app.component';
import {TopbarModule} from './TopbarModule/topbar.module';
import {MenubarModule} from './MenubarModule/menubar.module';

describe('AppComponent: ', () => {
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopbarModule, MenubarModule],
      declarations: [AppComponent]
     });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it ('should be created', () => {
    expect(comp instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should contain element with class ".topbar"', () => {
    let debugTopbar: DebugElement = fixture.debugElement.query(By.css('.topbar'));
    let elemTopbar: HTMLElement = debugTopbar.nativeElement;

    expect(elemTopbar).toBeDefined();
  });
});
