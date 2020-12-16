import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErgastSandbox } from '../../sandboxes/ergast.sandbox';
import { SeasonResultComponent } from './season-result.component';
import { SeasonResultRoutingModule } from './season-result-routing.module';
import { MockErgastSandbox } from '../../../testing/mocks';
import { ActivatedRoute } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ActivatedRouteStub } from '../../../testing/activated-route-stub';

let activatedRoute: ActivatedRouteStub;

describe('SeasonResultComponent', () => {
  let component: SeasonResultComponent;
  let fixture: ComponentFixture<SeasonResultComponent>;

  activatedRoute = new ActivatedRouteStub();

  beforeEach(() => {
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
  });

  describe('seasonResult `scope`', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SeasonResultComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('seasonResult 2008 `scope`', () => {
    it('should display `SEASON 2008`', () => {
      activatedRoute.setParamMap({seasonYearId: '2008'});
      fixture = TestBed.createComponent(SeasonResultComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const debugElement: DebugElement = fixture.debugElement;
      const element = debugElement.query(By.css('.title'));
      const span: HTMLElement = element.nativeElement;

      expect(span.textContent).toEqual('season 2008');
    });
  });

  describe('seasonResult 2005 `scope`', () => {
    it('should display `SEASON 2005`', () => {
      activatedRoute.setParamMap({seasonYearId: '2005'});
      fixture = TestBed.createComponent(SeasonResultComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const debugElement: DebugElement = fixture.debugElement;
      const element = debugElement.query(By.css('.title'));
      const span: HTMLElement = element.nativeElement;

      expect(span.textContent).toEqual('season 2005');
    });
  });

  describe('seasonResult 2020 `scope`', () => {
    it('should called to `gotoPageNotFound`', waitForAsync(() => {
      activatedRoute.setParamMap({seasonYearId: '2020'});
      fixture = TestBed.createComponent(SeasonResultComponent);
      component = fixture.componentInstance;
      spyOn(component, 'gotoPageNotFound');
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.gotoPageNotFound).toHaveBeenCalled();
      });
    }));
  });

});
