import { Component } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'ngbd-pagination',
	templateUrl: './progressbar.component.html',
    providers: [NgbProgressbarConfig]
}) 
 
export class NgbdpregressbarBasic{
  	constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }
}
