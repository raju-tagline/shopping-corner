import { UserSignUpComponent } from 'src/app/features/user/user-sign-up/user-sign-up.component';
import { UserLoginComponent } from 'src/app/features/user/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'signUp',
    component: UserSignUpComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
