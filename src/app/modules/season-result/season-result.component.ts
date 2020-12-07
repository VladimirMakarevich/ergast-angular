import { Component, OnInit } from '@angular/core';
import { DestroyableComponent } from '../../../@ergast/components/destroyable.component';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StandingsTableModel } from '../../../@core/models/standings-table.model';
import { RaceModel } from '../../../@core/models/race.model';
import { head } from 'lodash';
import { Routing } from '../../../@core/constants/routing/routing';
import { fromPromise } from 'rxjs/internal-compatibility';
import { ErgastSandbox } from '../../sandboxes/ergast.sandbox';

@Component({
  selector: 'app-season-result',
  templateUrl: './season-result.component.html',
  styleUrls: ['./season-result.component.scss']
})
export class SeasonResultComponent extends DestroyableComponent implements OnInit {

  public year: string;

  public races: RaceModel[];

  public standingsTable: StandingsTableModel;

  public winnerId: string;

  public isLoading: boolean;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private ergastSandbox: ErgastSandbox,
    private router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.subscriptions.push(
      this.activatedRoute.params.pipe(
        map(params => {
          this.year = params.seasonYearId;
          return this.year;
        }),
        mergeMap(this.ergastSandbox.seasonsFromSubject),
        map(seasons => {
          if (!seasons.find(season => season.season === this.year)) {
            fromPromise(this.gotoPageNotFound());
          }
          return this.year;
        }),
        mergeMap(this.ergastSandbox.standingsTableFromSubject),
        map(standingsTable => {
          this.standingsTable = standingsTable;
          const standingsListModel = this.standingsTable.StandingsLists.find(c => c.season === this.year);
          this.winnerId = head(standingsListModel.DriverStandings).Driver.driverId;
          return this.year;
        }),
        mergeMap(this.ergastSandbox.getListOfWinnersByYear),
        map(response => {
          this.races = response.MRData.RaceTable.Races;
        }),
        catchError((ex) => {
          this.setCompleteLoading();
          return ex;
        })
      ).subscribe(() => this.setCompleteLoading())
    );
  }

  public async gotoPageNotFound(): Promise<void> {
    await this.router.navigate(Routing.ergast.notFound());
  }

  private setCompleteLoading = (): void => {
    this.isLoading = false;
  };

}
