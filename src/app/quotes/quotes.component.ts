import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Subscription } from "rxjs";
import { ApiService } from "../api.service";
import { Quote } from "./quote";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})

export class QuotesComponent implements OnInit, OnDestroy {

  id: number;
  loaded = false;
  listOfQuotes: Quote[];
  displayableQuotes: Quote[] = [];
  private routeSub: Subscription;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void{
    this.addQuotes();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  addQuotes(): void {
    this.routeSub = this.route.params.pipe(
      mergeMap(params => {
        this.id = +params['id'];
        return this.apiService.getQuotesOfAllChar();
      }),

      mergeMap((listOfQuotes: Quote[]) => {
        this.listOfQuotes = listOfQuotes;
        return this.apiService.getCharacterNameById(this.id);
      })
    ).subscribe((nameOfChar: string) => {
      this.displayableQuotes = this.listOfQuotes.filter(quote => quote.author === nameOfChar);
      this.loaded = true;
    });
  }

}
