import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should display Ergast', () => {

    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('span'));
    const span: HTMLElement = element.nativeElement;

    expect(span.textContent).toEqual('Ergast');
  });

  it('Should click', (() => {
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
