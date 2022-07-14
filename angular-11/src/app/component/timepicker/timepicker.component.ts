import { Component, Injectable } from '@angular/core';
import { NgbTimeStruct, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, AbstractControl } from '@angular/forms';

  
@Component({
  selector: 'app-ngbd-timepicker',
  templateUrl: './timepicker.component.html'
 
})
export class NgbdtimepickerBasicComponent {
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  meridian = true;
  seconds = true;
  spinners = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }  

  toggleSpinners() {
      this.spinners = !this.spinners;
  } 

   ctrl = new FormControl('', (control: AbstractControl) => {
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
