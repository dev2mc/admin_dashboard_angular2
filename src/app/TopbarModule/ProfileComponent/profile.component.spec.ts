import { TestBed, ComponentFixture } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent: ', () => {
  let fixture: ComponentFixture<ProfileComponent>;
  let comp: ProfileComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent]
    });

    fixture = TestBed.createComponent(ProfileComponent);
    comp = fixture.componentInstance;
  });

  it ('should be created', () => {
    expect(comp instanceof ProfileComponent).toBe(true, 'should create ProfileComponent');
  });

  it('should contain element with class "profile"', () => {
    let debugProfile: DebugElement = fixture.debugElement.query(By.css('.profile'));
    let elemProfile: HTMLElement = debugProfile.nativeElement;

    expect(elemProfile).toBeDefined();
  });
});
