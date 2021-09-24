import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataFetchService } from 'src/app/data/data-fetch.service';

@Component({
  selector: 'app-geochart',
  template: '<div #geoChart style="width: 450px; height: 250px;"></div>',
  styleUrls: ['./geochart.component.css']
})
export class GeochartComponent implements AfterViewInit {

  @ViewChild('geoChart') geoChartRef?: ElementRef
  dataArr: Object[][] = [['Country', 'Active cases']]

  constructor(private dataService: DataFetchService){}

  ngOnInit(){
  }
  
  drawChart = () => {
    this.dataService.getAllCases()
      .subscribe(
        respData => {
          respData.forEach((resp) => {
            this.dataArr?.push([resp.country, resp.todayCases]);
          });
          var data = google.visualization.arrayToDataTable(
            this.dataArr
          );
      
          var options = {
            colorAxis: {
              colors: [
                '#ffffff',
                '#0d6efd'
              ]
            }
          };
      
          var chart = new google.visualization.GeoChart(this.geoChartRef?.nativeElement);
      
          chart.draw(data, options);
          console.log(this.dataArr);
        },
        errorMsg => {
          console.error(errorMsg);          
        }
      );
  }

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['geochart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
