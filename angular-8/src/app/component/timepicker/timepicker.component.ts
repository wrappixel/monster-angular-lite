import { Component, Injectable } from '@angular/core';
import { NgbTimeStruct, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {

  fromModel(value: string): NgbTimeStruct {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time1: NgbTimeStruct): string {
    if (!time1) {
      return null;
    }
    return `${this.pad(time1.hour)}:${this.pad(time1.minute)}:${this.pad(time1.second)}`;
  }

  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }
}

@Component({
  selector: 'app-ngbd-timepicker',
  templateUrl: './timepicker.component.html',
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})
export class NgbdtimepickerBasicComponent {
  time = { hour: 13, minute: 30 };
  meridian = true;

  // This is for the seconds
  seconds = true;

  // This is for the spinners
  spinners = true;

  // This is for the column step
  time2: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  // last
  time1: '13:30:00';

  // This is for the validation
  time3;
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return { tooEarly: true };
    }
    if (value.hour > 13) {
      return { tooLate: true };
    }

    return null;
  });

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleSpinners() {
    this.spinners = !this.spinners;
  }
}
