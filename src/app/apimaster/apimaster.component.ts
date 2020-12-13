import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from "../api.service";
import { Router } from '@angular/router';
import { Character } from './character'
import { Subscription } from "rxjs";
import { CharacterSearchPipe } from "../search/character-search.pipe";

@Component({
  selector: 'app-apimaster',
  templateUrl: './apimaster.component.html',
  styleUrls: ['./apimaster.component.scss'],
})

export class ApimasterComponent implements OnInit, OnDestroy {

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  private subs: Subscription;
  allCharacters: Character[] = [];
  status: string = '';
  loaded: boolean = false;

  ngOnInit(): void {
    this.apiReq();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  };

  apiReq() {
    this.subs = this.apiService.getAllCharacters().subscribe(data => {
      console.log(data)
      this.allCharacters = data;
      this.loaded = true;
    })
  };

  sortByStatus(status) {
    this.status = status;
  };


  routerNavigateTo(link: string) {
    this.router.navigate([link]);
  };
}
