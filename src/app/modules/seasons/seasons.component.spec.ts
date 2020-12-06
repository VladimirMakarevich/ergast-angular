import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SeasonsComponent } from './seasons.component';
import { SeasonsRoutingModule } from './seasons-routing.module';
import { CommonModule } from '@angular/common';
import { YearCardModule } from './components/year-card/year-card.module';
import { RouterModule } from '@angular/router';
import { ErgastSandbox } from '../../sandboxes/ergast.sandbox';
import { Observable, of } from 'rxjs';
import { SeasonModel } from '../../../@core/models/season.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('SeasonsComponent', () => {
  let component: SeasonsComponent;
  let fixture: ComponentFixture<SeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display `SELECT YEAR`', () => {

    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('.title'));
    const span: HTMLElement = element.nativeElement;

    expect(span.textContent).toEqual('Select Year');
  });

});


class MockErgastSandbox {
  public seasonsFromSubject = (): Observable<SeasonModel[]> => {
    const toReturn: Array<SeasonModel> = [];
    toReturn.push(new SeasonModel('2005', ''));
    toReturn.push(new SeasonModel('2006', ''));
    toReturn.push(new SeasonModel('2007', ''));
    toReturn.push(new SeasonModel('2008', ''));
    return of(toReturn);
  };
}
