import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Endpoints {

  public get ergast() {
    return ergast;
  }

  public get settings() {
    return settings;
  }

}

const settings = {
  /*
    Here is the configs and settings of the application,
    which are usually stored on the backend side and received when initializing the application
 */
  apiUrl: environment.baseUrl
}

const ergast = {
  getSeasonList: '/api/f1/seasons.json',
  getListOfWinnersByYear: '/api/f1/{0}/results/1.json',
  getAllWinnersOfDriversChampionships: '/api/f1/driverStandings/1.json'
}
