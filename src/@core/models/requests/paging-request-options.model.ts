export class PagingRequestOptionsModel {

  public constructor(
    public limit: number = 11,
    public offset: number = 55,
    public total?: number
  ) {
  }

}
