export { ActivatedRoute } from '@angular/router';

import { Params } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export class ActivatedRouteStub {

  private subject = new BehaviorSubject<any>(null);

  public constructor(
    initialParams?: Params
  ) {
    this.setParamMap(initialParams);
  }

  public readonly params = this.subject.asObservable();

  public setParamMap(params?: any): void {
    this.subject.next(params);
  }

}
