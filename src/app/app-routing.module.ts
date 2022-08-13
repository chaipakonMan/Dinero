import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'analyzer', component: AnalyzerComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
