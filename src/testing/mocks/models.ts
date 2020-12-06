import { DriverResultModel } from '../../@core/models/driver-result.model';
import { DriverModel } from '../../@core/models/driver.model';
import { RaceModel } from '../../@core/models/race.model';
import { SeasonResultResponseModel } from '../../@core/models/responses/season-result-response.model';
import { RaceTableModel } from '../../@core/models/race-table.model';
import { DriverStandingModel } from '../../@core/models/driver-standing.model';
import { StandingsListModel } from '../../@core/models/standings-list.model';
import { SeasonModel } from '../../@core/models/season.model';

export function getMockDriverResultModel(): DriverResultModel {
  const mockDriverResultModel = new DriverResultModel();
  mockDriverResultModel.Driver = new DriverModel();
  mockDriverResultModel.Driver.givenName = 'Fernando';
  mockDriverResultModel.Driver.familyName = 'Alonso';
  mockDriverResultModel.Driver.driverId = '1';
  return mockDriverResultModel;
}

export function getMockDriverResultModels(): DriverResultModel[] {
  const mockDriverResultModels = new Array<DriverResultModel>();
  mockDriverResultModels.push(getMockDriverResultModel());
  return mockDriverResultModels;
}

export function getMockRaceModel(): RaceModel {
  const mockRaceModel = new RaceModel();
  mockRaceModel.season = '2005';
  mockRaceModel.raceName = 'Sakhir GP';
  mockRaceModel.Results = getMockDriverResultModels();
  return mockRaceModel;
}

export function getMockSeasonResultResponseModel(): SeasonResultResponseModel {
  const mockSeasonResultResponseModel = new SeasonResultResponseModel();
  mockSeasonResultResponseModel.RaceTable = new RaceTableModel();
  mockSeasonResultResponseModel.RaceTable.season = '2005';
  mockSeasonResultResponseModel.RaceTable.Races = new Array<RaceModel>();
  return mockSeasonResultResponseModel;
}

export function getMockDriverStandingModel(): DriverStandingModel {
  const mockDriverStandingModel = new DriverStandingModel();
  mockDriverStandingModel.Driver = new DriverModel();
  mockDriverStandingModel.Driver.driverId = '1';
  mockDriverStandingModel.Driver.familyName = 'Alonso';
  mockDriverStandingModel.Driver.givenName = 'Fernando';
  return mockDriverStandingModel;
}

export function getMockStandingsListModel(): StandingsListModel {
  const mockStandingsListModel = new StandingsListModel();
  mockStandingsListModel.season = '2005';
  mockStandingsListModel.DriverStandings = new Array<DriverStandingModel>();
  mockStandingsListModel.DriverStandings.push(getMockDriverStandingModel());
  return mockStandingsListModel;
}

export function getMockSeasonModels(): SeasonModel[] {
  const toReturn: Array<SeasonModel> = [];
  toReturn.push(new SeasonModel('2005', ''));
  toReturn.push(new SeasonModel('2006', ''));
  toReturn.push(new SeasonModel('2007', ''));
  toReturn.push(new SeasonModel('2008', ''));
  return toReturn;
}
