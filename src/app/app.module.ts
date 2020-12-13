import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApimasterComponent } from './apimaster/apimaster.component';
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
import { SorterPipe } from './sorter.pipe';
import { QuotesComponent } from './quotes/quotes.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { CharacterSearchPipe } from './search/character-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApimasterComponent,
    SorterPipe,
    QuotesComponent,
    RegistrationComponent,
    AuthorizationComponent,
    SearchComponent,
    CharacterSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
