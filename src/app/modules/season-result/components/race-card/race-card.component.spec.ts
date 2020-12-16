import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RaceCardComponent } from './race-card.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { getMockRaceModel } from '../../../../../testing/mocks/models';


describe('RaceCardComponent', () => {
  let component: RaceCardComponent;
  let fixture: ComponentFixture<RaceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        RaceCardComponent
      ],
      providers: []
    }).compileComponents();
  });

  describe('raceCard `scope`', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(RaceCardComponent);
      component = fixture.componentInstance;
      component.winnerId = '1';
      component.race = getMockRaceModel();
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display `Fernando Alonso`', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const element = debugElement.query(By.css('.content__card-container__highlight'));
      const nativeElement: HTMLElement = element.nativeElement;

      expect(nativeElement.textContent).toContain('Fernando Alonso');
    });

    it('should display `Sakhir GP`', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const element = debugElement.query(By.css('span'));
      const span: HTMLElement = element.nativeElement;

      expect(span.textContent).toEqual('Sakhir GP');
    });

    it('should be winner', () => {
      expect(component.isWinner);
    });

  });
});
