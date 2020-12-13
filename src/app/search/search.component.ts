import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchSettings} from "./searchSettings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Character} from "../apimaster/character";
import {Subscription} from "rxjs";
import { ApiService } from "../api.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  settings = {
    status: '',
    name: '',
    season: 0,
    page: 0,
    pageSize: 99,
  };
  seasons = [1,2,3,4,5];
  statuses = ['Alive', 'Deceased', 'Presumed dead'];
  pageSizes = [3, 6, 12];
  allCharacters: Character[] = [];
  loaded: boolean = false;
  private subs: Subscription;
  fg: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.paramsParser()
    console.log(this.settings)
    this.fg = this.fb.group({
      name: [this.settings.name]
    });

    this.apiReq();
  }

  paramsParser(): void {
    let allSets = ['status', 'name', 'season', 'page', 'pageSize'];
    this.route.queryParams.subscribe( (setParams:SearchSettings) => {
      allSets.forEach( (setting: string) => {
        if (setParams[setting]) this.settings[setting] = setParams[setting]
      })
    })
  }

  isSeasonSet(val: number): boolean {
    return (this.settings.season == val)
  }

  isStatusSet(status: string): boolean {
    return (this.settings.status == status)
  }

  isPageSizeSet(size: number): boolean {
    return (this.settings.pageSize == size)
  }

  setSetting(setting, value): void {
    this.settings[setting] = value;
    this.router.navigate([], {queryParams: this.settings}).then(() => this.paramsParser());
  }

  setSeason(season: number): void {
    this.setSetting('season', season);
  }

  setStatus(status: string): void {
    this.setSetting('status', status);
  }

  setPageSize(size: number): void {
    this.setSetting('pageSize', size)
  }

  setName(): void {
    this.setSetting('name', this.fg.controls['name'].value)
  }

  apiReq() {
    this.subs = this.apiService.getAllCharacters().subscribe(data => {
      console.log(data)
      this.allCharacters = data;
      this.loaded = true;
    })
  }

  routerNavigateTo(link: string) {
    this.router.navigate([link]);
  };

  search(): void {
    this.router.navigate([], {queryParams: this.settings}).then()
  }

  resetParams(): void {
    this.settings = {
      status: '',
      name: '',
      season: 0,
      page: 0,
      pageSize: 99,
    };
    this.router.navigate([], {}).then(() => this.paramsParser());
  }

}
