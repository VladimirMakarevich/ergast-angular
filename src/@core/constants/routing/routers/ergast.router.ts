export class ErgastRouter {

  public static seasons = 'seasons';
  public static season = 'season';
  public static notFound = 'not-found';

  public seasonDetails(year: string): Array<any> {
    return [
      '/',
      ErgastRouter.season,
      year
    ];
  }

  public notFound(): Array<any> {
    return [
      '/',
      ErgastRouter.notFound
    ];
  }

  public get default(): string {
    return ErgastRouter.seasons;
  }

}
