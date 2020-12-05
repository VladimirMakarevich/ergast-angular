import { NgModule } from '@angular/core';
import { ErgastLayoutComponent } from './ergast-layout.component';
import { ContentModule } from '../../@ergast/components/content/content.module';
import { HeaderModule } from '../../@ergast/components/header/header.module';
import { FooterModule } from '../../@ergast/components/footer/footer.module';

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
