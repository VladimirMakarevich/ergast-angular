import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-year-card',
  templateUrl: './year-card.component.html',
  styleUrls: ['./year-card.component.scss']
})
export class YearCardComponent {

  private _year: number;

  @Input()
  public set year(value: number) {
    this._year = value;
  }

  public get year(): number {
    return this._year;
  }

}
