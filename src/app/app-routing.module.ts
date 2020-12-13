import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApimasterComponent } from "./apimaster/apimaster.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path: '', component: ApimasterComponent},
  {path: 'quotes/:id', component: QuotesComponent},
  {path: 'reg', component: RegistrationComponent},
  {path: 'auth', component: AuthorizationComponent},
  {path: 'search', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
