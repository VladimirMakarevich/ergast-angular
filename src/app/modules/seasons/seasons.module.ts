import { NgModule } from '@angular/core';
import { SeasonsComponent } from './seasons.component';
import { SeasonsRoutingModule } from './seasons-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { YearCardModule } from './components/year-card/year-card.module';

@NgModule({
  imports: [
    RouterModule,
    SeasonsRoutingModule,
    CommonModule,
    YearCardModule
  ],
  declarations: [
    SeasonsComponent,
  ],
  providers: []
})
export class SeasonsModule {
}
