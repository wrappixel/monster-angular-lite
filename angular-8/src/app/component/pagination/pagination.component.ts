import { Component } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-pagination',
  templateUrl: './pagination.component.html'
})
export class NgbdpaginationBasicComponent {
  page = 4;
  page2 = 1;
  currentPage = 3;
  disablepage = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
