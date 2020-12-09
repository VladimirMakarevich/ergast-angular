import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErgastSandbox } from '../../sandboxes/ergast.sandbox';
import { SeasonResultComponent } from './season-result.component';
import { SeasonResultRoutingModule } from './season-result-routing.module';
import { MockErgastSandbox } from '../../../testing/mocks';
import { ActivatedRoute } from "@angular/router";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ActivatedRouteStub } from "../../../testing/activated-route-stub";

let activatedRoute: ActivatedRouteStub;

describe('SeasonResultComponent', () => {
  let component: SeasonResultComponent;
  let fixture: ComponentFixture<SeasonResultComponent>;

  activatedRoute = new ActivatedRouteStub({seasonYearId: '2005'});

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SeasonResultRoutingModule,
      ],
      declarations: [
        SeasonResultComponent
      ],
      providers: [
        {
          provide: ErgastSandbox,
          useClass: MockErgastSandbox
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        }
      ]
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SeasonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display `SEASON 2005`', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('.title'));
    const span: HTMLElement = element.nativeElement;

    expect(span.textContent).toEqual('season 2005');
  });

  it('Should display `SEASON 2008`', () => {
    activatedRoute.setParamMap({seasonYearId: '2008'});
    component = fixture.componentInstance;
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('.title'));
    const span: HTMLElement = element.nativeElement;

    expect(span.textContent).toEqual('season 2008');
  });

  // it('Should called to `gotoPageNotFound`', (() => {
  //   activatedRoute.setParamMap({seasonYearId: '2020'});
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //
  //   fixture.whenStable().then(() => {
  //     expect(component.gotoPageNotFound).toHaveBeenCalled();
  //   });
  // }));

});
