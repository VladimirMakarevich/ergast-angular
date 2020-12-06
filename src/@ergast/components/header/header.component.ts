import { AfterViewInit, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { VisibilityState } from './enums/visibility-state.enum';
import { Direction } from './enums/direction.enum';
import { headerHiddenAnimation } from '../../animations';
import { DestroyableComponent } from '../destroyable.component';
import { Routing } from '../../../@core/constants/routing/routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: headerHiddenAnimation
})
export class HeaderComponent extends DestroyableComponent implements AfterViewInit {
  private isVisible = true;

  @HostBinding('@toggle')
  public get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  public constructor(
    private router: Router
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    this.subscriptions.push(scrollUp$.subscribe(() => (this.isVisible = true)));
    this.subscriptions.push(scrollDown.subscribe(() => (this.isVisible = false)));
  }

  public async handleBack(): Promise<void> {
    await this.router.navigate(Routing.home.homeUrl());
  }

}
