import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearCardComponent } from './year-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    YearCardComponent,
  ],
  exports: [
    YearCardComponent,
  ],
  providers: []
})
export class YearCardModule {
}
