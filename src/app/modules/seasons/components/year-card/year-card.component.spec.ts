import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { YearCardComponent } from './year-card.component';


describe('YearCardComponent', () => {
  let component: YearCardComponent;
  let fixture: ComponentFixture<YearCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        YearCardComponent
      ],
      providers: []
    }).compileComponents();
  });

  describe('yearCard `scope`', () => {
    beforeEach(waitForAsync(() => {
      fixture = TestBed.createComponent(YearCardComponent);
      component = fixture.componentInstance;
      component.year = '2005';
      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display `2005`', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const element = debugElement.query(By.css('span'));
      const span: HTMLElement = element.nativeElement;

      expect(span.textContent).toEqual('2005');
    });

    it('should handle `SeasonDetails`', waitForAsync(() => {
      spyOn(component, 'handleSeasonDetails');

      const debugElement: DebugElement = fixture.debugElement;
      const element = debugElement.query(By.css('.card.card-small'));
      const card: HTMLElement = element.nativeElement;

      card.click();

      fixture.whenStable().then(() => {
        expect(component.handleSeasonDetails).toHaveBeenCalled();
      });
    }));
  });

});
