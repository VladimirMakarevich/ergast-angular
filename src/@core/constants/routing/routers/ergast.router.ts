export class ErgastRouter {
  public static seasons = 'seasons';
  public static season = 'season';

  public seasonDetails(year: string): Array<any> {
    return [
      '/',
      ErgastRouter.season,
      year
    ];
  }

  public get default(): string {
    return ErgastRouter.seasons;
  }

}
