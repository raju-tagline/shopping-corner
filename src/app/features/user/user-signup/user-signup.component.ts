import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
  public mySignUpForm!: FormGroup;
  public genders = [
    { id: 1, genderType: 'Male' },
    { id: 2, genderType: 'Female' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.mySignUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,32}$'),
      ]),
      // confirmPassword:new FormControl(null,Validators.required)
    });
  }

  public onSubmi(): void {
    console.log('SIGN UP SUCCESS!');
    console.log(this.mySignUpForm.value);
  }
}