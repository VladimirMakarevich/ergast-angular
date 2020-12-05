import { DriverStandingModel } from './driver-standing.model';

export class StandingsListModel {
  public season: string;
  public round: string;
  public driverStandings: DriverStandingModel[];

}
