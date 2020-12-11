import { HomeRouter } from './routers/home.router';
import { ErgastRouter } from './routers/ergast.router';

/*
 Facade for Routers in the app
 */
export class Routing {

  private static _ergast: ErgastRouter;
  private static _home: HomeRouter;

  public static get ergast(): ErgastRouter {
    if (this._ergast) {
      this._ergast = new ErgastRouter();
    }

    return this._ergast;
  }

  public static get home(): HomeRouter {
    if (this._home) {
      this._home = new HomeRouter();
    }

    return this._home;
  }

}
