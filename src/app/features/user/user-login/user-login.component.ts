import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'shopping-corner-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  @Input() public websiteName?: string = 'Shopping Corner';
  public myLoginForm!: FormGroup;
  public allUsers: any;
  public userDetail: any;

  constructor(
    private authService: AuthService,
    private Router: Router,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    this.myLoginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,32}$'),
      ]),
    });
    this.myLoginForm.setValue({
      email: 'admin.raju@gmail.com',
      password: '123456',
    });
  }

  public onSubmit() {
    const email = this.myLoginForm.value.email;
    const password = this.myLoginForm.value.password;

    this.authService.login(email, password).then((res: any) => {
      let allUserData: any;
      const loginEmail = res.user.multiFactor.user?.email;
      allUserData = this.db.database.ref('/user');

      allUserData.on('value', (data: any) => {
        this.allUsers = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            customer_key: key,
          };
        });

        this.userDetail = this.allUsers.find(
          (e: any) => e.email === loginEmail
        );

        if (this.userDetail.role === 'customer') {
          localStorage.setItem('customerId', this.userDetail.customer_key);
          this.Router.navigate(['/customer']);
        } else if (this.userDetail.role === 'admin') {
          this.Router.navigate(['/admin']);
        }
      });
    });

    this.authService.login(email, password);
  }
}
