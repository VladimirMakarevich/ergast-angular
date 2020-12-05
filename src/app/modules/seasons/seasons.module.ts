import { NgModule } from '@angular/core';
import { SeasonsComponent } from './seasons.component';
import { SeasonsRoutingModule } from './seasons-routing.module';

@NgModule({
  imports: [
    SeasonsRoutingModule
  ],
  declarations: [
    SeasonsComponent,
  ],
  providers: []
})
export class SeasonsModule {
}
