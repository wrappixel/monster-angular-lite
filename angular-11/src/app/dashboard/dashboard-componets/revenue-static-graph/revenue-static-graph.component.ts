import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue-static-graph',
  templateUrl: './revenue-static-graph.component.html',
  styleUrls: ['./revenue-static-graph.component.css']
})
export class RevenueStaticGraphComponent implements OnInit {

    // lineChart
    public lineChartData: Array<object> = [
      { data: [8,13,1,13,1], label: 'Product A' },
      { data: [14,1,14,1,14], label: 'Product B' }
    ];
    public lineChartLabels: Array<string> = [
      '1',
      '2',
      '3',
      '4',
      '5',
    ];
    public lineChartOptions={
      responsive: true,
      maintainAspectRatio: false
    };
    public lineChartColors= [
      {
        // grey
        backgroundColor: 'rgba(0,158,251,0.1)',
        borderColor: '#009efb',
        pointBackgroundColor: '#009efb',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#009efb'
      },
      {
        // dark grey
        backgroundColor: 'rgba(85,206,99,0.1)',
        borderColor: '#55ce63',
        pointBackgroundColor: '#55ce63',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#55ce63'
      }
    ];
    public lineChartLegend = false;
    public lineChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

}
