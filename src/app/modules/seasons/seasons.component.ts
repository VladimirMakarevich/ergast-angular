import { Component, OnInit } from '@angular/core';
import { DestroyableComponent } from '../../../@ergast/components/destroyable.component';
import { SeasonModel } from '../../../@core/models/season.model';
import { Router } from '@angular/router';
import { Routing } from '../../../@core/constants/routing/routing';
import { ErgastSandbox } from '../../sandboxes/ergast.sandbox';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent extends DestroyableComponent implements OnInit {

  public seasonModels: SeasonModel[];

  public constructor(
    private ergastSandbox: ErgastSandbox,
    private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.ergastSandbox.seasonsFromSubject().subscribe(seasons => {
        this.seasonModels = seasons;
      })
    );
  }

  public async gotoSeasonDetails(year: string): Promise<void> {
    await this.router.navigate(Routing.ergast.seasonDetails(year));
  }

}
