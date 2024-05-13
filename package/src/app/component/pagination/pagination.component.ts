import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';


const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-ngbd-pagination',
  standalone: true,
  imports: [NgbPaginationModule, NgIf],
  templateUrl: './pagination.component.html',
})
export class NgbdpaginationBasicComponent {
  page = 4;
  page2 = 4;
  currentPage = 3;
  page3 = 4;

  //   disabled
  page4 = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  //   custom links
  page5 = 4;

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  selectPage(page: string) {
    this.page5 = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
}
