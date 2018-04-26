import { Component } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'ngbd-timepicker',
	templateUrl: './timepicker.component.html'
}) 
 
export class NgbdtimepickerBasic{
  	time = {hour: 13, minute: 30};
    meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  // This is for the seconds
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  // This is for the spinners
  spinners = true;

  toggleSpinners() {
      this.spinners = !this.spinners;
  }

  // This is for the column step
  time2: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  // This is for the validation
  time3;
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;
 
    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return {tooEarly: true};
    }
    if (value.hour > 13) {
      return {tooLate: true};
    }

    return null;
  });
}
