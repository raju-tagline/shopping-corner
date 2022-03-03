import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopping-corner-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  @Input() public websiteName?:string = 'Shopping Corner'
  public myLoginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.myLoginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,32}$'),
      ]),
    });
  }

  public onSubmit() {
    console.log('this.myLoginForm.value :>> ', this.myLoginForm.value);
  }
}
