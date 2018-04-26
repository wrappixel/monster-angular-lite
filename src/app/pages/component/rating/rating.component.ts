import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
	selector: 'ngbd-rating',
	templateUrl: './rating.component.html',
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .heart {
      position: relative;  
      display: inline-block;
      font-size: 3rem;
      color: #d3d3d3;
    }
    .full {
      color: red;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: red;
    }
  `]
}) 
  
export class NgbdratingBasic{
  	currentRate = 8;
    currentRate2 = 2;
    selected = 0;
    hovered = 0;
    readonly = false;
    // for form integration
    ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
} 
