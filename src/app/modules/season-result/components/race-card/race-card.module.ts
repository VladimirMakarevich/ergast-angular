import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceCardComponent } from './race-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RaceCardComponent,
  ],
  exports: [
    RaceCardComponent,
  ],
  providers: []
})
export class RaceCardModule {
}
