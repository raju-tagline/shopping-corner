import { DealsComponent } from 'src/app/features/customer/deals/deals.component';
import { CustomerProfileComponent } from 'src/app/features/customer/customer-profile/customer-profile.component';
import { CheckOutComponent } from 'src/app/features/customer/check-out/check-out.component';
import { ShowProductComponent } from 'src/app/features/customer/show-product/show-product.component';
import { DashboardComponent } from 'src/app/features/customer/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerServiceComponent } from 'src/app/features/customer/customer-service/customer-service.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'deal',
        component: DealsComponent,
      },
      {
        path: 'show-product',
        component: ShowProductComponent,
      },
      {
        path: 'customer-service',
        component: CustomerServiceComponent,
      },
      {
        path: 'check-out',
        component: CheckOutComponent,
      },
      {
        path: 'profile',
        component: CustomerProfileComponent,
      },
      {
        path: '**',
        redirectTo: 'deal',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
