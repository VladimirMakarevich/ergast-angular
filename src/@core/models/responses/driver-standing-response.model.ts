import { StandingsTableModel } from '../standings-table.model';

export class DriverStandingResponseModel {
  public limit: string;
  public offset: string;
  public total: string;
  public StandingsTable: StandingsTableModel;

}
