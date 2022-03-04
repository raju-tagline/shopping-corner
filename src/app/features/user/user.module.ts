import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from 'src/app/features/user/user-routing.module';
import { UserLoginComponent } from 'src/app/features/user/user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
