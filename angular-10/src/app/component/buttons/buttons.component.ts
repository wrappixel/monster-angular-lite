import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {
  public checkboxGroupForm: FormGroup;

  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  model = {
    left: true,
    middle: false,
    right: false
  };

  model1 = 1;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}
