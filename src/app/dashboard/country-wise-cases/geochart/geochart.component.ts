import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-geochart',
  template: '<div #geoChart style="width: 450px; height: 250px;"></div>',
  styleUrls: ['./geochart.component.css']
})
export class GeochartComponent implements AfterViewInit {

  @ViewChild('geoChart') geoChartRef?: ElementRef

  drawChart = () => {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Active cases'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700],
      ['India', 300]
    ]);

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
  }

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['geochart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
