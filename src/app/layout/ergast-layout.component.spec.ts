import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErgastLayoutComponent } from './ergast-layout.component';

describe('ErgastLayoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ErgastLayoutComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ErgastLayoutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
