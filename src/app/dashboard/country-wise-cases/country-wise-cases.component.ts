import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-country-wise-cases',
  templateUrl: './country-wise-cases.component.html',
  styleUrls: ['./country-wise-cases.component.css']
})
export class CountryWiseCasesComponent implements OnInit {
  
  casesByCountry = new Map();  

  constructor() { 
    this.casesByCountry.set('USA', this.getRandomValue());
    this.casesByCountry.set('China', this.getRandomValue());
    this.casesByCountry.set('Italy', this.getRandomValue());
    this.casesByCountry.set('Spain', this.getRandomValue());
    this.casesByCountry.set('Germany', this.getRandomValue());
    this.casesByCountry.set('France', this.getRandomValue());
    this.casesByCountry.set('Iran', this.getRandomValue());
    this.casesByCountry.set('UK', this.getRandomValue());
    this.casesByCountry.set('Switzerland', this.getRandomValue());
    this.casesByCountry.set('Netherlands', this.getRandomValue());
    this.casesByCountry.set('south korea', this.getRandomValue());
    this.casesByCountry.set('Belgium', this.getRandomValue());
    this.casesByCountry.set('Australia', this.getRandomValue());
    this.casesByCountry.set('Pakistan', this.getRandomValue());
    this.casesByCountry.set('Nepal', this.getRandomValue());
    this.casesByCountry.set('Malasia', this.getRandomValue());
    this.casesByCountry.set('Austria', this.getRandomValue());
  }
  
  ngOnInit(): void {
  }
  
  private getRandomValue(){
    let min = 10;
    let max = 10000;
    return Math.floor(Math.random() * (max - min) + min);
  }

}
