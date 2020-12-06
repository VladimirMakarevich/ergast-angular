import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RaceModel } from '../../../@core/models/race.model';

@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RaceCardComponent {

  @Input()
  public race: RaceModel;

  @Input()
  public winnerId: string;

  public isWinner(driverId: string): boolean {
    return driverId === this.winnerId;
  }

}
