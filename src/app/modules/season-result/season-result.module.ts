import { NgModule } from '@angular/core';
import { SeasonResultComponent } from './season-result.component';
import { SeasonResultRoutingModule } from './season-result-routing.module';

@NgModule({
  imports: [
    SeasonResultRoutingModule
  ],
  declarations: [
    SeasonResultComponent,
  ],
  providers: []
})
export class SeasonResultModule {
}
