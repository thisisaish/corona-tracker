import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataFetchService } from 'src/app/data/data-fetch.service';

declare let google: any;

@Component({
  selector: 'app-columnchart',
  template: '<div #columnchart style="width: 550px; height: 200px;"></div>',
  styleUrls: ['./columnchart.component.css']
})
export class ColumnchartComponent implements AfterViewInit {

  @ViewChild('columnchart') chartRef?: ElementRef
  dataArr: Object[][] = [['County', 'Cases']]

  constructor(private dataService: DataFetchService) {}

  drawStuff = () => {
    this.dataService.getAllCases()
      .subscribe(
        respData => {
          respData.forEach((resp)=> {
            if(resp.todayCases > 0){
              this.dataArr.push([resp.countryInfo.iso3, resp.todayCases]);
            }
          });

          let data = google.visualization.arrayToDataTable(
            this.dataArr
          );
      
          let options = {
            width: 450,
            legend: { position: 'none' },
            axes: {
              x: {
                0: { side: 'top', label: 'Daily infected cases'} // Top x-axis.
              }
            },
            bar: { groupWidth: "80%" }
          };
      
          const chart = new google.charts.Bar(this.chartRef?.nativeElement);
          chart.draw(data, google.charts.Bar.convertOptions(options));
        },
        errorMsg => {
          console.error(errorMsg);          
        }
      );
  }

  ngAfterViewInit() {
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(this.drawStuff);
  }

}
