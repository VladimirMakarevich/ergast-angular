import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../../../@core/services/ergast.service';
import { DestroyableComponent } from '../../../@ergast/components/destroyable.component';
import { PagingRequestOptionsModel } from '../../../@core/models/requests/paging-request-options.model';
import { SeasonModel } from '../../../@core/models/season.model';
import { Router } from '@angular/router';
import { Routing } from '../../../@core/constants/routing/routing';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent extends DestroyableComponent implements OnInit {

  public seasonModels: SeasonModel[];

  public constructor(
    private ergastService: ErgastService,
    private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.ergastService.getSeasons(new PagingRequestOptionsModel())
        .subscribe(response => {
          this.seasonModels = response.MRData.SeasonTable.Seasons;
        })
    );
  }

  public async gotoSeasonDetails(year: string): Promise<void> {
    await this.router.navigate(Routing.ergast.seasonDetails(year));
  }

}
