import { Component } from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-pagination',
	templateUrl: './tabs.component.html'
}) 
 
export class NgbdtabsBasic{
  	public beforeChange($event: NgbTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
    };
}
