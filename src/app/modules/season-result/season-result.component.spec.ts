import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErgastSandbox } from '../../sandboxes/ergast.sandbox';
import { SeasonResultComponent } from './season-result.component';
import { SeasonResultRoutingModule } from './season-result-routing.module';
import { MockErgastSandbox } from '../../../testing/mocks';


describe('SeasonResultComponent', () => {
  let component: SeasonResultComponent;
  let fixture: ComponentFixture<SeasonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SeasonResultRoutingModule,
      ],
      declarations: [
        SeasonResultComponent
      ],
      providers: [
        {provide: ErgastSandbox, useClass: MockErgastSandbox},
        // {
        //   provide: ActivatedRoute,
        //   useValue: {
        //     params: of({seasonYearId: 2005})
        //   }
        // }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Should display `SEASON 2005`', () => {
  //
  //   const debugElement: DebugElement = fixture.debugElement;
  //   const element = debugElement.query(By.css('.title'));
  //   const span: HTMLElement = element.nativeElement;
  //
  //   expect(span.textContent).toEqual('SEASON 2005');
  // });

});
