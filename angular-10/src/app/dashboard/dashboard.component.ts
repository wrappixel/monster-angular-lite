import { Component, AfterViewInit } from '@angular/core';
// import { ChartsModule } from 'ng2-charts';
declare var require: any;
@Component({
  templateUrl: './dashboard.component.html'
})



export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [8,13,1,13,1], label: 'Product A' },
    { data: [14,1,14,1,14], label: 'Product B' }
  ];
  public lineChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
  ];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
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

  ngAfterViewInit() {}
}
