import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SeasonsComponent } from './seasons.component';
import { SeasonsRoutingModule } from './seasons-routing.module';
import { CommonModule } from '@angular/common';
import { YearCardModule } from './components/year-card/year-card.module';
import { RouterModule } from '@angular/router';
import { ErgastSandbox } from '../../sandboxes/ergast.sandbox';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockErgastSandbox } from '../../../testing/mocks';


describe('SeasonsComponent', () => {
  let component: SeasonsComponent;
  let fixture: ComponentFixture<SeasonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SeasonsRoutingModule,
        CommonModule,
        YearCardModule,
        RouterModule
      ],
      declarations: [
        SeasonsComponent
      ],
      providers: [
        {provide: ErgastSandbox, useClass: MockErgastSandbox}
      ]
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display `SELECT YEAR`', () => {

    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('.title'));
    const span: HTMLElement = element.nativeElement;

    expect(span.textContent).toEqual('Select Year');
  });

  it('Should click to `gotoSeasonDetails`', (() => {
    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('.card'));
    const gotoSeasonDetails: HTMLElement = element.nativeElement;

    gotoSeasonDetails.click();

    fixture.whenStable().then(() => {
      expect(component.gotoSeasonDetails).toHaveBeenCalled();
    });
  }));

});
