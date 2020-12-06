import { Observable, of } from 'rxjs';
import { SeasonModel } from '../../@core/models/season.model';
import { StandingsTableModel } from '../../@core/models/standings-table.model';
import { StandingsListModel } from '../../@core/models/standings-list.model';
import { RootResponseModel } from '../../@core/models/responses/root-response.model';
import { SeasonResultResponseModel } from '../../@core/models/responses/season-result-response.model';
import {
  getMockDriverResultModel,
  getMockRaceModel,
  getMockSeasonModels,
  getMockSeasonResultResponseModel,
  getMockStandingsListModel
} from './models';

export class MockErgastSandbox {
  public seasonsFromSubject = (): Observable<SeasonModel[]> => {
    const toReturn = getMockSeasonModels();
    return of(toReturn);
  };

  public standingsTableFromSubject = (): Observable<StandingsTableModel> => {
    const toReturn: StandingsTableModel = new StandingsTableModel();
    toReturn.StandingsLists = new Array<StandingsListModel>();

    const mockStandingsListModel = getMockStandingsListModel();

    toReturn.StandingsLists.push(mockStandingsListModel);
    return of(toReturn);
  };

  public getListOfWinnersByYear = (year: string): Observable<RootResponseModel<SeasonResultResponseModel>> => {
    const toReturn: RootResponseModel<SeasonResultResponseModel> = new RootResponseModel<SeasonResultResponseModel>();

    const mockSeasonResultResponseModel = getMockSeasonResultResponseModel();
    const mockRaceModel = getMockRaceModel();
    const mockDriverResultModel = getMockDriverResultModel();

    mockRaceModel.Results.push(mockDriverResultModel);
    mockSeasonResultResponseModel.RaceTable.Races.push(mockRaceModel);
    toReturn.MRData = mockSeasonResultResponseModel;

    return of(toReturn);
  };
}
