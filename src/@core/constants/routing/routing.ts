
export class Routing {
  public static get account(): AccountRouter {
    return new AccountRouter();
  }

  public static get home(): HomeRouter {
    return new HomeRouter();
  }

}
