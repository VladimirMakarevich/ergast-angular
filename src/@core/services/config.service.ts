import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../constants/endpoints';
import { SettingsModel } from '../models/settings.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public settings: SettingsModel = new SettingsModel('');

  public constructor(
    private http: HttpClient,
    private endpoints: Endpoints
  ) {
  }

  /*
  Here is the initialization of the configs and settings, which are usually stored on the backend side
   */
  public initialize(): Observable<SettingsModel> {
    return of(new SettingsModel(this.endpoints.settings.apiUrl)).pipe(
      tap(this.setConfig)
    );
  }

  private setConfig = (settings: SettingsModel): void => {
    this.settings = settings;
  };

}
