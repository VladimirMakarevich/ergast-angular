export class HomeRouter {
  public static home = 'seasons';

  public homeUrl(): Array<any> {
    return [
      '/',
    ];
  }

  public get default(): string {
    return HomeRouter.home;
  }

}
