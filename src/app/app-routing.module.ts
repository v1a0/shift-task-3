import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApimasterComponent} from "./apimaster/apimaster.component";
import {QuotesComponent} from "./quotes/quotes.component";

const routes: Routes = [
  {path: '', component: ApimasterComponent},
  {path: 'quotes/:id', component: QuotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
