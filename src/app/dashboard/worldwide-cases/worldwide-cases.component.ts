import { Component,  OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/data/data-fetch.service';

@Component({
  selector: 'app-worldwide-cases',
  templateUrl: './worldwide-cases.component.html',
  styleUrls: ['./worldwide-cases.component.css']
})
export class WorldwideCasesComponent implements OnInit {

  totalCases?: number;
  active?: number;
  recovered?: number;
  deaths?: number;

  constructor(private dataService: DataFetchService) { }

  ngOnInit(): void {
    this.dataService.getWorldwideCases()
      .subscribe(
        respData => {
          this.active = respData.active;
          this.recovered = respData.recovered;
          this.deaths = respData.deaths;
          this.totalCases = this.active + this.recovered + this.deaths;
          // console.log(respData);
        },
        error => {
          console.error(error);          
        }
      );
  }

}
