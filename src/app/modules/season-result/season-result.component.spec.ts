import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ErgastSandbox } from '../../sandboxes/ergast.sandbox';
import { Observable, of } from 'rxjs';
import { SeasonModel } from '../../../@core/models/season.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SeasonResultComponent } from './season-result.component';
import { SeasonResultRoutingModule } from './season-result-routing.module';
import { RaceCardModule } from './components/race-card/race-card.module';
import { StandingsTableModel } from '../../../@core/models/standings-table.model';
import { StandingsListModel } from '../../../@core/models/standings-list.model';
import { DriverStandingModel } from '../../../@core/models/driver-standing.model';
import { DriverModel } from '../../../@core/models/driver.model';
import { RootResponseModel } from '../../../@core/models/responses/root-response.model';
import { SeasonResultResponseModel } from '../../../@core/models/responses/season-result-response.model';
import { RaceTableModel } from '../../../@core/models/race-table.model';
import { RaceModel } from '../../../@core/models/race.model';
import { DriverResultModel } from '../../../@core/models/driver-result.model';


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


class MockErgastSandbox {
  public seasonsFromSubject = (): Observable<SeasonModel[]> => {
    const toReturn: Array<SeasonModel> = [];
    toReturn.push(new SeasonModel('2005', ''));
    toReturn.push(new SeasonModel('2006', ''));
    toReturn.push(new SeasonModel('2007', ''));
    toReturn.push(new SeasonModel('2008', ''));
    return of(toReturn);
  };

  public standingsTableFromSubject = (): Observable<StandingsTableModel> => {
    const toReturn: StandingsTableModel = new StandingsTableModel();
    toReturn.StandingsLists = new Array<StandingsListModel>();

    const mockStandingsListModel = new StandingsListModel();
    mockStandingsListModel.season = '2005';
    mockStandingsListModel.DriverStandings = new Array<DriverStandingModel>();

    const mockDriverStandingModel = new DriverStandingModel();
    mockDriverStandingModel.Driver = new DriverModel();
    mockDriverStandingModel.Driver.driverId = '1';
    mockDriverStandingModel.Driver.familyName = 'Alonso';
    mockDriverStandingModel.Driver.givenName = 'Fernando';

    mockStandingsListModel.DriverStandings.push(mockDriverStandingModel);
    toReturn.StandingsLists.push(mockStandingsListModel);

    return of(toReturn);
  };

  public getListOfWinnersByYear = (year: string): Observable<RootResponseModel<SeasonResultResponseModel>> => {
    const toReturn: RootResponseModel<SeasonResultResponseModel> = new RootResponseModel<SeasonResultResponseModel>();

    const mockSeasonResultResponseModel = new SeasonResultResponseModel();
    mockSeasonResultResponseModel.RaceTable = new RaceTableModel();
    mockSeasonResultResponseModel.RaceTable.season = '2005';
    mockSeasonResultResponseModel.RaceTable.Races = new Array<RaceModel>();

    const mockRaceModel = new RaceModel();
    mockRaceModel.season = '2005';
    mockRaceModel.Results = new Array<DriverResultModel>();

    const mockDriverResultModel = new DriverResultModel();
    mockDriverResultModel.Driver = new DriverModel();
    mockDriverResultModel.Driver.givenName = 'Fernando';
    mockDriverResultModel.Driver.familyName = 'Alonso';
    mockDriverResultModel.Driver.driverId = '1';

    mockRaceModel.Results.push(mockDriverResultModel);
    mockSeasonResultResponseModel.RaceTable.Races.push(mockRaceModel);
    toReturn.MRData = mockSeasonResultResponseModel;

    return of(toReturn);
  };
}
