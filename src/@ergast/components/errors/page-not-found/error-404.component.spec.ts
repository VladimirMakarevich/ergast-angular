import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Error404Component } from './error-404.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('Error404Component', () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Error404Component
      ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display 404 ERROR', () => {

    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('span'));
    const span: HTMLElement = element.nativeElement;

    expect(span.textContent).toEqual('404 ERROR');
  });

  it('Should click', (() => {
    const debugElement: DebugElement = fixture.debugElement;
    const element = debugElement.query(By.css('.btn-back'));
    const btnBack: HTMLElement = element.nativeElement;

    btnBack.click();

    fixture.whenStable().then(() => {
      expect(component.handleBack).toHaveBeenCalled();
    });
  }));
});
