import { Injectable } from '@angular/core';
import { ErgastService } from '../../@core/services/ergast.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SeasonModel } from '../../@core/models/season.model';
import { PagingRequestOptionsModel } from '../../@core/models/requests/paging-request-options.model';
import { RootResponseModel } from '../../@core/models/responses/root-response.model';
import { SeasonResultResponseModel } from '../../@core/models/responses/season-result-response.model';
import { StandingsTableModel } from '../../@core/models/standings-table.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErgastSandbox {

  private seasonsSubject = new BehaviorSubject<SeasonModel[]>([]);
  private standingsTableSubject = new BehaviorSubject<StandingsTableModel>(new StandingsTableModel());

  public constructor(
    private service: ErgastService
  ) {
  }

  public seasonsFromSubject = (): Observable<SeasonModel[]> => {
    if (this.seasonsSubject && this.seasonsSubject.getValue()?.length) {
      return of(this.seasonsSubject.getValue());
    }
    return this.getSeasons(new PagingRequestOptionsModel());
  };

  public standingsTableFromSubject = (): Observable<StandingsTableModel> => {
    if (this.standingsTableSubject && this.standingsTableSubject.getValue()?.StandingsLists?.length) {
      return of(this.standingsTableSubject.getValue());
    }
    return this.getAllWinnersOfDriversChampionships(new PagingRequestOptionsModel());
  };

  public getListOfWinnersByYear = (year: string): Observable<RootResponseModel<SeasonResultResponseModel>> => {
    return this.service.getListOfWinnersByYear(year);
  };

  private getSeasons = (paging: PagingRequestOptionsModel): Observable<SeasonModel[]> => {
    return this.service.getSeasons(paging).pipe(map(response => {
      this.seasonsSubject.next(response.MRData.SeasonTable.Seasons);
      return response.MRData.SeasonTable.Seasons;
    }));
  };

  private getAllWinnersOfDriversChampionships = (paging: PagingRequestOptionsModel)
    : Observable<StandingsTableModel> => {
    return this.service.getAllWinnersOfDriversChampionships(paging).pipe(map(response => {
      this.standingsTableSubject.next(response.MRData.StandingsTable);
      return response.MRData.StandingsTable;
    }));
  };

}
