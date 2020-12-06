import { NgModule } from '@angular/core';
import { SeasonResultComponent } from './season-result.component';
import { SeasonResultRoutingModule } from './season-result-routing.module';
import { CommonModule } from '@angular/common';
import { RaceCardModule } from './components/race-card/race-card.module';

@NgModule({
    imports: [
        SeasonResultRoutingModule,
        CommonModule,
        RaceCardModule
    ],
  declarations: [
    SeasonResultComponent,
  ],
  providers: []
})
export class SeasonResultModule {
}
