import { AddProductComponent } from 'src/app/features/admin/add-product/add-product.component';
import { CustomerOrdersComponent } from 'src/app/features/admin/customer-orders/customer-orders.component';
import { ProductListComponent } from 'src/app/features/admin/product-list/product-list.component';
import { DashboardComponent } from 'src/app/features/admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'customer-order',
    component: CustomerOrdersComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
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
export class AdminRoutingModule {}
