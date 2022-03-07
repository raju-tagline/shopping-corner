import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss'],
})
export class CustomerServiceComponent implements OnInit {
  public feedBackForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.feedBackForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      feedBack: new FormControl(null, Validators.required),
    });
  }
  public onSumbit(): void {
    console.log('this.feedBackForm.value :>> ', this.feedBackForm.value);
    this.feedBackForm.reset();
  }
}
