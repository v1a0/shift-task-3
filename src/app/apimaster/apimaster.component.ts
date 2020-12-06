import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Router } from '@angular/router';
import { Character } from './character'

@Component({
  selector: 'app-apimaster',
  templateUrl: './apimaster.component.html',
  styleUrls: ['./apimaster.component.scss']
})

export class ApimasterComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  allCharacters1: Character[] = [];
  allCharacters = [];
  status: string = '';
  loaded: boolean = false;

  ngOnInit(): void {
    this.apiReq()

  }

  apiReq() {
    this.apiService.getAllCharacters().subscribe(data => {
      this.allCharacters = data
      console.log(data)
      this.loaded = true
    })
  }

  sortByStatus(status) {
    this.status = status
  }

  routerNavigateTo(link: string) {
    this.router.navigate([link])
  }

}
