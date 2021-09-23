import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/data/data-fetch.service';

@Component({
  selector: 'app-nationwide-cases',
  templateUrl: './nationwide-cases.component.html',
  styleUrls: ['./nationwide-cases.component.css']
})
export class NationwideCasesComponent implements OnInit {

  totalCases?: number;
  active?: number;
  recovered?: number;
  deaths?: number;
  updatedTime?: number;

  constructor(private dataService: DataFetchService) { }

  ngOnInit(): void {
    let country = new Date().toString().split('(')[1].split(" ")[0];
    this.dataService.getNationwideCases(country)
      .subscribe(
        respData => {
          this.active = respData.active;
          this.recovered = respData.recovered;
          this.deaths = respData.deaths;
          this.totalCases = this.active + this.recovered + this.deaths;
          this.updatedTime = respData.updated;
        },
        error => {
          console.log(error);
        }
      );
  }

}
