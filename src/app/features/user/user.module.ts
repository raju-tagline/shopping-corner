import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from 'src/app/features/user/user-routing.module';
import { UserLoginComponent } from 'src/app/features/user/user-login/user-login.component';
import { UserSignUpComponent } from 'src/app/features/user/user-sign-up/user-sign-up.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignUpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
