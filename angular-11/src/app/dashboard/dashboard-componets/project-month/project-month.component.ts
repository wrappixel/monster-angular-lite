import { Component, OnInit } from '@angular/core';
import {Project,monthlyProject} from './projectOfMonth-data';

@Component({
  selector: 'app-project-month',
  templateUrl: './project-month.component.html',
  styleUrls: ['./project-month.component.css']
})
export class ProjectMonthComponent implements OnInit {

  tableData:Project[];

  constructor() {
    this.tableData=monthlyProject;
   }

  ngOnInit(): void {
  }

}
