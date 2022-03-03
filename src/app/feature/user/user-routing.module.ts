import { UserLoginComponent } from 'src/app/feature/user/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component:UserLoginComponent
  },
  {
    path: '**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
