import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/ergast-layout.module').then(m => m.ErgastLayoutModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./modules/errors/page-not-found/error-404.module').then(m => m.Error404Module)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/errors/page-not-found/error-404.module').then(m => m.Error404Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
