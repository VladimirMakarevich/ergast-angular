import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RaceModel } from '../../../../../@core/models/race.model';
import { head } from 'lodash';
import { DriverModel } from '../../../../../@core/models/driver.model';

@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RaceCardComponent implements OnInit {

  @Input()
  public race: RaceModel;

  @Input()
  public winnerId: string;

  private _isWinner = false;

  public get isWinner(): boolean {
    return this._isWinner;
  }

  public ngOnInit(): void {
    this._isWinner = head(this.race.Results).Driver.driverId === this.winnerId;
  }

  public getDriverFullName(driver: DriverModel): string {
    return driver.givenName + ' ' + driver.familyName;
  }

}
