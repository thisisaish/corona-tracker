import { Component } from "@angular/core";
import { DataFetchService } from "../data/data-fetch.service";

@Component({
    templateUrl: './header.component.html',
    selector: 'app-header',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    updatedOn?: string;
    month = ['January','February','March','April','May','June','July','August','September','October','November','December']

    constructor(private dataService: DataFetchService){}

    ngOnInit(){
        let time = new Date();
        this.dataService.getWorldwideCases()
            .subscribe(
                respData => {
                    time = new Date(respData["updated"]);
                    this.updatedOn = this.month[time.getMonth()] +' '+time.getDate()+', '+time.getFullYear()+' '+time.getHours()+':'+time.getMinutes();
                },
                error => {
                    console.error(error);                    
                }
            );
    }
}