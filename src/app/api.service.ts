import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: Http
  ) { }

  getAllCharacters() {
    const url = "https://breakingbadapi.com/api/characters"
    return this.http.get(url)
      .pipe(map(res => res.json()))
  }

  getQuotesOfAllChar(id) {
    const url = "https://breakingbadapi.com/api/quotes"
    return this.http.get(url)
      .pipe(map(res => res.json()))
  }

  getCharacterNameById(id) {
    const url = "https://breakingbadapi.com/api/characters/" + id
    return this.http.get(url)
      .pipe(map(res => {
        const data = res.json()
        return data[0].name
      }))
  }

}
