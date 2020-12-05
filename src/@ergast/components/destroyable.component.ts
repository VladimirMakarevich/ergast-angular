import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class DestroyableComponent implements OnDestroy {
  public subscriptions: Subscription[] = [];

  public ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
      });
    }
  }

}
