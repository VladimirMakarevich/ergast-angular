import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Endpoints {

  public get ergast(): Ergast {
    return new Ergast();
  }

  public get settings(): Settings {
    return new Settings();
  }

}

export class Settings {

  private baseUrl = environment.baseUrl;
  /*
    Here is the configs and settings of the application,
    which are usually stored on the backend side and received when initializing the application
 */
  public get apiUrl(): string {
    return this.baseUrl;
  }

}

export class Ergast {
  public get getSeasonList(): string {
    return '/api/f1/seasons.json';
  }

  public get getListOfWinnersByYear(): string {
    return '/api/f1/{0}/results/1.json';
  }

  public get getAllWinnersOfDriversChampionships(): string {
    return '/api/f1/driverStandings/1.json';
  }

}
