import { NgModule } from '@angular/core';
import { SeasonResultComponent } from './season-result.component';
import { SeasonResultRoutingModule } from './season-result-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SeasonResultRoutingModule,
    CommonModule
  ],
  declarations: [
    SeasonResultComponent,
  ],
  providers: []
})
export class SeasonResultModule {
}
