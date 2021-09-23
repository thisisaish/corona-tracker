import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-columnchart',
  template: '<div #columnchart style="width: 450px; height: 200px;"></div>',
  styleUrls: ['./columnchart.component.css']
})
export class ColumnchartComponent implements AfterViewInit {

  @ViewChild('columnchart') chartRef?: ElementRef

  drawStuff = () => {
    let data = google.visualization.arrayToDataTable([
      ['Country', 'Cases'],
      ["Ind", 44],
      ["USA", 31],
      ["Aus", 12],
      ["China", 10],
      ['Braz', 3],
      ["Ru", 12],
      ["Malasia", 10],
      ['Canada', 3]
    ]);

    let options = {
      width: 300,
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
  }

  ngAfterViewInit() {
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(this.drawStuff);
  }

}
