import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataFetchService } from 'src/app/data/data-fetch.service';
declare var google: any;

@Component({
  selector: 'app-country-wise-cases',
  templateUrl: './country-wise-cases.component.html',
  styleUrls: ['./country-wise-cases.component.css']
})
export class CountryWiseCasesComponent implements OnInit {
  
  casesByCountry = new Map();  

  constructor(private dataService: DataFetchService) {}
  
  ngOnInit(): void {
    this.dataService.getAllCases()
      .subscribe(
        respData => {
          respData.forEach((resp) => {
            this.casesByCountry.set(resp.country, resp.active);
          });
        },
        errorMsg => {
          console.error(errorMsg);
        }
      )
  }

}
