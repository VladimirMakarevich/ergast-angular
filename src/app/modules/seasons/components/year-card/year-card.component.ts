import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-year-card',
  templateUrl: './year-card.component.html',
  styleUrls: ['./year-card.component.scss']
})
export class YearCardComponent {

  @Output()
  public seasonEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public set year(value: string) {
    this._year = value;
  }

  public get year(): string {
    return this._year;
  }

  private _year: string;

  public handleSeasonDetails(selectedYear: string): void {
    this.seasonEvent.emit(selectedYear);
  }

}
