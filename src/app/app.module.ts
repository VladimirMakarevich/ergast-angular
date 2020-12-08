import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigService } from '../@core/services/config.service';
import { appInitialize } from '../@core/initialize/app-initialize';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from "../@ergast/errors/app-error.handler";
import { HttpDataInterceptor } from "../@ergast/interceptors/http-data.interceptor";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitialize,
      multi: true,
      deps: [
        ConfigService
      ]
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpDataInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
