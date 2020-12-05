import { NgModule } from '@angular/core';
import { SeasonsComponent } from './seasons.component';
import { SeasonsRoutingModule } from './seasons-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    SeasonsRoutingModule,
    CommonModule
  ],
  declarations: [
    SeasonsComponent,
  ],
  providers: []
})
export class SeasonsModule {
}
