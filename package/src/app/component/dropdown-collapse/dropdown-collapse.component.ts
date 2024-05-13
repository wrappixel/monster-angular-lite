import { Component } from '@angular/core';
import {
  NgbDropdownModule,
  NgbModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown-basic',
  standalone: true,
  imports: [NgbDropdownModule, NgbModule, NgbCollapseModule],
  templateUrl: './dropdown-collapse.component.html',
})
export class NgbdDropdownBasicComponent {
  // This is for the collapse example
  public isCollapsed = false;
  public isCollapsed2 = false;

  collapsed = true;
}
