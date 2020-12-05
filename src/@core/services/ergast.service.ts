import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpBaseService } from './http-base.service';
import { ConfigService } from './config.service';
import { Endpoints } from '../constants/endpoints';
import { stringFormat } from '../utils/functions';
import { PagingRequestOptionsModel } from '../models/requests/paging-request-options.model';

@Injectable({
  providedIn: 'root'
})
export class ErgastService extends HttpBaseService {

  public constructor(
    protected http: HttpClient,
    protected config: ConfigService,
    private endpoints: Endpoints
  ) {
    super(http, config);
  }

  public getFullApiUrl(url: string): string {
    return this.config.settings.apiUrl + url;
  }

  public getSeasons = (paging: PagingRequestOptionsModel): Observable<any> => {
    return this.get<null, any>(
      this.endpoints.ergast.getSeasonList,
      null
    );
  };

  public getAllWinnersOfDriversChampionships = (paging: PagingRequestOptionsModel): Observable<any> => {
    return this.get<null, any>(
      this.endpoints.ergast.getAllWinnersOfDriversChampionships,
      null
    );
  };

  public getListOfWinnersByYear = (year: number): Observable<any> => {
    return this.get<null, any>(
      stringFormat(this.endpoints.ergast.getListOfWinnersByYear, year),
      null
    );
  };

}
