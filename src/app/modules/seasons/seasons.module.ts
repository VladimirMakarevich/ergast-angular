import { NgModule } from '@angular/core';
import { SeasonsComponent } from './seasons.component';
import { SeasonsRoutingModule } from './seasons-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    SeasonsRoutingModule
  ],
  declarations: [
    SeasonsComponent,
  ],
  providers: []
})
export class SeasonsModule {
}
