import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { YearCardComponent } from './year-card.component';


describe('YearCardComponent', () => {
  let component: YearCardComponent;
  let fixture: ComponentFixture<YearCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        YearCardComponent
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(YearCardComponent);
    component = fixture.componentInstance;
    component.year = '2005';
    fixture.detectChanges();
  }));

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display `2005`', () => {

    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('span'));
    const span: HTMLElement = element.nativeElement;

    expect(span.textContent).toEqual('2005');
  });

  it('Should handle `SeasonDetails`', (() => {
    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('.card.card-small'));
    const card: HTMLElement = element.nativeElement;

    card.click();

    fixture.whenStable().then(() => {
      expect(component.handleSeasonDetails).toHaveBeenCalled();
    });
  }));

});
