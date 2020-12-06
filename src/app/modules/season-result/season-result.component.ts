import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DestroyableComponent } from '../../../@ergast/components/destroyable.component';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { ErgastService } from '../../../@core/services/ergast.service';
import { StandingsTableModel } from '../../../@core/models/standings-table.model';
import { PagingRequestOptionsModel } from '../../../@core/models/requests/paging-request-options.model';
import { RaceModel } from '../../../@core/models/race.model';
import { StandingsListModel } from '../../../@core/models/standings-list.model';
import { head } from 'lodash';

@Component({
  selector: 'app-season-result',
  templateUrl: './season-result.component.html',
  styleUrls: ['./season-result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeasonResultComponent extends DestroyableComponent implements OnInit {

  public year: string;

  public races: RaceModel[];

  public standingsTable: StandingsTableModel;

  // TODO: MVV: refactoring
  public get winnerId(): string {
    if (this.standingsListModel?.DriverStandings) {
      return head(this.standingsListModel.DriverStandings).Driver.driverId;
    }
    return '';
  }

  private standingsListModel: StandingsListModel;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private service: ErgastService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.params.pipe(
        map(params => {
          // TODO: MVV: add constraints if year < 2005 && > 2015 => not found page
          //  for example, we can store the years (prev page), and then check it where we want in app => use Subject or BihSubject
          this.year = params.seasonYearId;
          return this.year;
        }),
        mergeMap(this.service.getListOfWinnersByYear)
      ).subscribe(response => {
        this.races = response.MRData.RaceTable.Races;
      })
    );

    // TODO: MVV: should be from cache (+ init)
    this.subscriptions.push(
      this.service.getAllWinnersOfDriversChampionships(new PagingRequestOptionsModel()
      ).subscribe(response => {
        this.standingsTable = response.MRData.StandingsTable;
        this.standingsListModel = this.standingsTable.StandingsLists.find(c => {
          return c.season === this.year;
        });
      })
    );
  }

}
