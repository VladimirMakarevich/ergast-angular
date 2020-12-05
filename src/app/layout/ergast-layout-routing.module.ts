import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErgastLayoutComponent } from './ergast-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ErgastLayoutComponent,
    children: [
      {
        path: 'seasons', loadChildren: () =>
          import('../modules/seasons/seasons.module').then(m => m.SeasonsModule)
      },
      {
        path: 'season/:seasonYearId', loadChildren: () =>
          import('../modules/season-result/season-result.module').then(m => m.SeasonResultModule)
      }
    ]
  }
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
