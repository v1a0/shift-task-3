import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  private routeSub: Subscription
  private id
  private displayableQuotes
  private loaded = false

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.addQuotes()
  }

  addQuotes() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']

      this.apiService.getQuotesOfAllChar(this.id).subscribe(listOfQuotes => {
        this.apiService.getCharacterNameById(this.id).subscribe(nameOfChar => {
          this.displayableQuotes = listOfQuotes.filter(quote => quote.author == nameOfChar)
          this.loaded = true
        })
      })
    })

  }

}
