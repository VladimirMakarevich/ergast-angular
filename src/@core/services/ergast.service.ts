import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpBaseService } from './http-base.service';
import { ConfigService } from './config.service';
import { Endpoints } from '../constants/endpoints';
import { stringFormat } from '../utils/functions';
import { PagingRequestOptionsModel } from '../models/requests/paging-request-options.model';
import { DriverStandingResponseModel } from '../models/responses/driver-standing-response.model';
import { SeasonResultResponseModel } from '../models/responses/season-result-response.model';
import { SeasonResponseModel } from '../models/responses/season-response.model';
import { RootResponseModel } from '../models/responses/root-response.model';

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

  protected getFullApiUrl(url: string): string {
    return this.config.settings.apiUrl + url;
  }

  public getSeasons = (paging: PagingRequestOptionsModel): Observable<RootResponseModel<SeasonResponseModel>> => {
    return this.get<PagingRequestOptionsModel, RootResponseModel<SeasonResponseModel>>(
      this.endpoints.ergast.getSeasonList,
      paging
    );
  };

  public getAllWinnersOfDriversChampionships = (paging: PagingRequestOptionsModel)
    : Observable<RootResponseModel<DriverStandingResponseModel>> => {
    return this.get<PagingRequestOptionsModel, RootResponseModel<DriverStandingResponseModel>>(
      this.endpoints.ergast.getAllWinnersOfDriversChampionships,
      paging
    );
  };

  public getListOfWinnersByYear = (year: string): Observable<RootResponseModel<SeasonResultResponseModel>> => {
    return this.get<null, RootResponseModel<SeasonResultResponseModel>>(
      stringFormat(this.endpoints.ergast.getListOfWinnersByYear, year),
      null
    );
  };

}
