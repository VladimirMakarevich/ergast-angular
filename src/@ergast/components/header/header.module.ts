import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: []
})
export class HeaderModule {
}
