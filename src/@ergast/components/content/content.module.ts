import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [
    ContentComponent
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {
}
