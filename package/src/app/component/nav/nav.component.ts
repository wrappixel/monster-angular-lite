import { Component } from '@angular/core';
import { NgbNavModule, NgbNavChangeEvent, NgbDropdownModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
	selector: 'app-ngbd-nav',
	standalone: true,
	imports: [NgbNavModule, NgbDropdownModule, NgFor, NgIf, NgbAlertModule],
	templateUrl: './nav.component.html',

})
export class NgbdnavBasicComponent {
	//  basic navs
	active = 1;

	// vertical 
	active2 = 'top';


}
