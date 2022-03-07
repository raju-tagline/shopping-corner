import { MobilesComponent } from 'src/app/features/customer/mobiles/mobiles.component';
import { BooksComponent } from 'src/app/features/customer/books/books.component';
import { DealsComponent } from 'src/app/features/customer/deals/deals.component';
import { DashboardComponent } from 'src/app/features/customer/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerServiceComponent } from 'src/app/features/customer/customer-service/customer-service.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'deal',
    component: DealsComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'mobiles',
    component: MobilesComponent,
  },
  {
    path: 'customer-service',
    component: CustomerServiceComponent,
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
