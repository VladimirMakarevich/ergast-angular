import { DriverResultModel } from '../../@core/models/driver-result.model';
import { DriverModel } from '../../@core/models/driver.model';
import { RaceModel } from '../../@core/models/race.model';
import { SeasonResultResponseModel } from '../../@core/models/responses/season-result-response.model';
import { RaceTableModel } from '../../@core/models/race-table.model';
import { DriverStandingModel } from '../../@core/models/driver-standing.model';
import { StandingsListModel } from '../../@core/models/standings-list.model';
import { SeasonModel } from '../../@core/models/season.model';
import { RootResponseModel } from "../../@core/models/responses/root-response.model";
import { SeasonResponseModel } from "../../@core/models/responses/season-response.model";
import { SeasonTableModel } from "../../@core/models/season-table.model";
import { DriverStandingResponseModel } from "../../@core/models/responses/driver-standing-response.model";
import { StandingsTableModel } from "../../@core/models/standings-table.model";

const mainSeason = '2005';

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
  mockRaceModel.season = mainSeason;
  mockRaceModel.raceName = 'Sakhir GP';
  mockRaceModel.Results = getMockDriverResultModels();
  return mockRaceModel;
}

export function getMockSeasonResultResponseModel(): SeasonResultResponseModel {
  const mockSeasonResultResponseModel = new SeasonResultResponseModel();
  mockSeasonResultResponseModel.RaceTable = new RaceTableModel();
  mockSeasonResultResponseModel.RaceTable.season = mainSeason;
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
  mockStandingsListModel.season = mainSeason;
  mockStandingsListModel.DriverStandings = new Array<DriverStandingModel>();
  mockStandingsListModel.DriverStandings.push(getMockDriverStandingModel());
  return mockStandingsListModel;
}

export function getMockSeasonModels(): SeasonModel[] {
  const toReturn: Array<SeasonModel> = [];
  toReturn.push(new SeasonModel(mainSeason, ''));
  toReturn.push(new SeasonModel('2006', ''));
  toReturn.push(new SeasonModel('2007', ''));
  toReturn.push(new SeasonModel('2008', ''));
  return toReturn;
}

export function getMockRootSeasonResponseModel(): RootResponseModel<SeasonResponseModel> {
  const toReturn: RootResponseModel<SeasonResponseModel> = new RootResponseModel<SeasonResponseModel>();
  toReturn.MRData = new SeasonResponseModel();
  toReturn.MRData.SeasonTable = new SeasonTableModel();
  toReturn.MRData.SeasonTable.Seasons = getMockSeasonModels();
  return toReturn;
}

export function getMockRootSeasonResultResponseModel(): RootResponseModel<SeasonResultResponseModel> {
  const toReturn: RootResponseModel<SeasonResultResponseModel> = new RootResponseModel<SeasonResultResponseModel>();
  toReturn.MRData = new SeasonResultResponseModel();
  toReturn.MRData.RaceTable = new RaceTableModel();
  toReturn.MRData.RaceTable.season = mainSeason;
  toReturn.MRData.RaceTable.Races = [];
  return toReturn;
}

export function getMockRootDriverStandingResponseModel(): RootResponseModel<DriverStandingResponseModel> {
  const toReturn: RootResponseModel<DriverStandingResponseModel> = new RootResponseModel<DriverStandingResponseModel>();
  toReturn.MRData = new DriverStandingResponseModel();
  toReturn.MRData.StandingsTable = new StandingsTableModel();
  toReturn.MRData.StandingsTable.StandingsLists = new Array<StandingsListModel>();
  toReturn.MRData.StandingsTable.StandingsLists.push(getMockStandingsListModel());
  return toReturn;
}


