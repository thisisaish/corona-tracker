import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable } from "rxjs";

export interface ResponseData{
    "updated": number,
    "cases": number,
    "todayCases": number,
    "deaths": number,
    "todayDeaths": number,
    "recovered": number,
    "todayRecovered": number,
    "active": number,
    "critical": number,
    "casesPerOneMillion": number,
    "deathsPerOneMillion": number,
    "tests": number,
    "testsPerOneMillion": number,
    "population": number,
    "oneCasePerPeople": number,
    "oneDeathPerPeople": number,
    "oneTestPerPeople": number,
    "activePerOneMillion": number,
    "recoveredPerOneMillion": number,
    "criticalPerOneMillion": number,
    "affectedCountries": number
}

@Injectable({
    providedIn: 'root'
})
export class DataFetchService{

    constructor(private http: HttpClient) {}

    getWorldwideCases(){
        return this.http.get<ResponseData>(
            'https://corona.lmao.ninja/v2/all'
        );
    }

    getNationwideCases(country: string){
        let url = 'https://corona.lmao.ninja/v2/countries/'+country;
        return this.http.get<ResponseData>(url);
    }

}

