import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from 'src/app/features/admin/admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [DashboardComponent, ProductListComponent, CustomerOrdersComponent, AddProductComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
