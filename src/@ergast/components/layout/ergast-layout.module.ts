import { NgModule } from '@angular/core';
import { ErgastLayoutComponent } from './ergast-layout.component';
import { ContentModule } from '../content/content.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    ContentModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [
    ErgastLayoutComponent
  ],
  exports: [
    ErgastLayoutComponent
  ]
})
export class ErgastLayoutModule {
}
