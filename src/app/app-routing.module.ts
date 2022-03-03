import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./feature/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./feature/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./feature/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: '**',
    redirectTo:'user'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
