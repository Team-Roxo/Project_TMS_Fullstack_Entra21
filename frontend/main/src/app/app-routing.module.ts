import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsightComponent } from './insight/insight.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'insight', component:InsightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
