export { ActivatedRoute } from '@angular/router';

import { Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';

export class ActivatedRouteStub {

  private subject = new ReplaySubject<any>();

  public constructor(
    initialParams?: Params
  ) {
    this.setParamMap(initialParams);
  }

  public readonly params = this.subject.asObservable();

  public setParamMap(params?: any) {
    this.subject.next(params);
  }

}
