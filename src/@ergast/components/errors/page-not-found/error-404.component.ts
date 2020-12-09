import { Component, ViewEncapsulation } from '@angular/core';
import { Routing } from '../../../../@core/constants/routing/routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Error404Component {

  public constructor(
    private router: Router
  ) {
  }

  public async handleBack(): Promise<void> {
    await this.router.navigate(Routing.home.homeUrl());
  }

}
