import {TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {DashboardModule} from '../dashboard.module';

import {DashboardComponent} from './dashboard.component';

describe('DashboardComponent: ', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let comp: DashboardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(comp instanceof DashboardComponent).toBe(true, 'should create MenubarComponent')
  });

  it('there shoudl be 4 update elements', () => {
    let updateEls = fixture.debugElement.query(By.css('.dashboard')).nativeElement.querySelectorAll('update');

    expect(updateEls.length).toEqual(4);
  });
});
