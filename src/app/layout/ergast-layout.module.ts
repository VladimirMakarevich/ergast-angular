import { NgModule } from '@angular/core';
import { ErgastLayoutComponent } from './ergast-layout.component';
import { ContentModule } from '../../@ergast/components/content/content.module';
import { HeaderModule } from '../../@ergast/components/header/header.module';
import { FooterModule } from '../../@ergast/components/footer/footer.module';
import { RouterModule } from '@angular/router';
import { ErgastLayoutRoutingModule } from './ergast-layout-routing.module';

@NgModule({
  imports: [
    RouterModule,

    ErgastLayoutRoutingModule,

    ContentModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [
    ErgastLayoutComponent
  ]
})
export class ErgastLayoutModule {
}
