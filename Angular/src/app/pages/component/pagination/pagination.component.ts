import { Component } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-pagination',
	templateUrl: './pagination.component.html'
}) 
 
export class NgbdpaginationBasic{
  	page = 4;
  	page2 = 1;
  	currentPage = 3;
  	disablepage = 3;
  	isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
