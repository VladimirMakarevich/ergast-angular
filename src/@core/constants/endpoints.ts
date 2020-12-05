import { Injectable } from '@angular/core';

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
  public get apiUrl(): string {
    return 'http://ergast.com';
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
