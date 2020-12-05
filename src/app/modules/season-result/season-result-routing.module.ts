import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonResultComponent } from './season-result.component';

const routes: Routes = [
    {
        path: '', component: SeasonResultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeasonResultRoutingModule {
}
