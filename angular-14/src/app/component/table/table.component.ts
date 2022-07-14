import { Component } from '@angular/core';
import {Product,TopSelling, TableRows, Employee} from './table-data';


@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html'
})
export class TableComponent {
  topSelling:Product[];

  trow:TableRows[];

  constructor() { 

    this.topSelling=TopSelling;

    this.trow=Employee;
  }
}
