import {TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {MenubarItemComponent} from './menubar-item.component';

describe('MenubarItemComponent: ', () => {
  let icon: string;
  let name: string;
  let link: string;
  let number: string|boolean;

  let fixture: ComponentFixture<MenubarItemComponent>;
  let comp: MenubarItemComponent;

  beforeEach(() => {
    icon = 'fa-comment';
    name = 'comment';
    link = '#';
    number = '9';

    TestBed.configureTestingModule({
      declarations: [MenubarItemComponent]
    });

    fixture = TestBed.createComponent(MenubarItemComponent);
    comp = fixture.componentInstance;

    comp.icon = icon;
    comp.name = name;
    comp.link = link;
    comp.number = number;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(comp instanceof MenubarItemComponent).toBe(true, 'should create MenubarItemComponent');
  });

  it('href attribute of the element with class "menubar-item__link" should be equal to comp.link property', () => {
    let hrefAttr = fixture.debugElement.query(By.css('.menubar-item__link')).nativeElement.getAttribute('href');

    expect(hrefAttr).toEqual(comp.link);
  });

  it('classname of the element with "class menubar-item__icon" should contain string from comp.icon property', () => {
    let className = fixture.debugElement.query(By.css('.menubar-item__icon')).nativeElement.className;

    expect(className.indexOf(comp.icon) > -1).toBeTruthy();
  });

  it('element with class "menubar-item__name" should contain text equal to comp.name', () => {
    let nameText = fixture.debugElement.query(By.css('.menubar-item__name')).nativeElement.textContent;

    expect(nameText).toEqual(comp.name);
  });

  it('if comp.name equal to false, elemnt with class "menubar-item__badge" should not appear in template', () => {
    comp.number = false;
    fixture.detectChanges();

    let elemNumber = fixture.debugElement.query(By.css('.menubar-item')).nativeElement.querySelector('.menubar-item__badge');

    expect(elemNumber).toEqual(null);
  });
});
