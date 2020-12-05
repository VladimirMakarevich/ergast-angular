import { HomeRouter } from './routers/home.router';
import { ErgastRouter } from './routers/ergast.router';

export class Routing {
  public static get ergast(): ErgastRouter {
    return new ErgastRouter();
  }

  public static get home(): HomeRouter {
    return new HomeRouter();
  }

}
