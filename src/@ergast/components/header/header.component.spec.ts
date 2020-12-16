import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  });

  describe('header `scope`', () => {
    beforeEach(waitForAsync(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should create HeaderComponent', () => {
      expect(component).toBeTruthy();
    });

    it('should display Ergast', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const element = debugElement.query(By.css('span'));
      const span: HTMLElement = element.nativeElement;

      expect(span.textContent).toEqual('Ergast');
    });

    it('should click', waitForAsync(() => {
      spyOn(component, 'handleBack');

      const debugElement: DebugElement = fixture.debugElement;
      const element = debugElement.query(By.css('img'));
      const btnBack: HTMLElement = element.nativeElement;

      btnBack.click();

      fixture.whenStable().then(() => {
        expect(component.handleBack).toHaveBeenCalled();
      });
    }));
  });

});
