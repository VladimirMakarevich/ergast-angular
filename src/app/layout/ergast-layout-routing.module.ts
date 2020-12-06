import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErgastLayoutComponent } from './ergast-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ErgastLayoutComponent,
    children: [
      {
        path: '', redirectTo: '/seasons', pathMatch: 'full',
      },
      {
        path: 'seasons', loadChildren: () =>
          import('../modules/seasons/seasons.module').then(m => m.SeasonsModule)
      },
      {
        path: 'season/:seasonYearId', loadChildren: () =>
          import('../modules/season-result/season-result.module').then(m => m.SeasonResultModule)
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('../../@ergast/components/errors/page-not-found/error-404.module').then(m => m.Error404Module)
      },
      {
        path: '**',
        loadChildren: () =>
          import('../../@ergast/components/errors/page-not-found/error-404.module').then(m => m.Error404Module)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErgastLayoutRoutingModule {
}
