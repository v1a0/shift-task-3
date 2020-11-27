import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-apimaster',
  templateUrl: './apimaster.component.html',
  styleUrls: ['./apimaster.component.scss']
})
export class ApimasterComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  allCharacters = []
  displayCharacters = []
  status = ''
  loaded = false

  ngOnInit(): void {
    this.apiReq()

  }

  apiReq() {
    this.apiService.getAllCharacters().subscribe(data => {
      this.allCharacters = data
      this.displayCharacters = data
      console.log(data)
      this.loaded = true
    })


  }

  sortByStatus(status) {
    this.status = status
  }




}
