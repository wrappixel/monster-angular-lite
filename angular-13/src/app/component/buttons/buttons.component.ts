import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  templateUrl: "buttons.component.html",
})
export class ButtonsComponent implements OnInit {
  public checkboxGroupForm: FormGroup = Object.create(null);

  public radioGroupForm: FormGroup = Object.create(null);

  constructor(private formBuilder: FormBuilder) { }

  buttonsdata: Object[] = [
    {
      btn: "primary",
      icon: "fa-check"
    },
    {
      btn: "secondary",
      icon: "fa-link"
    },
    {
      btn: "success",
      icon: "fa-check"
    },
    {
      btn: "info",
      icon: "fa-heart"
    },
    {
      btn: "warning",
      icon: "fa-list"
    },
    {
      btn: "danger",
      icon: "fa-envelope"
    },
  ];

  model = {
    left: true,
    middle: false,
    right: false,
  };

  model1 = 1;

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false,
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1,
    });
  }
}
