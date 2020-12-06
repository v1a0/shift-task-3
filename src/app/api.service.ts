import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { HttpClient } from "@angular/common/http";
import { Quote } from "./quotes/quote";
import {Character} from "./apimaster/character";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllCharacters() {
    const url = "https://breakingbadapi.com/api/characters";
    return this.http.get<Character[]>(url);
  };

  getQuotesOfAllChar() {
    const url = "https://breakingbadapi.com/api/quotes";
    return this.http.get<Quote[]>(url);
  };

  getCharacterNameById(id) {
    const url = "https://breakingbadapi.com/api/characters/" + id;
    return this.http.get<Character>(url)
      .pipe(map(res => {
        return res[0].name;
      }))
  }

}
