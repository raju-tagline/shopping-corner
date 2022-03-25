import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from 'src/app/features/admin/admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    CustomerOrdersComponent,
    AddProductComponent,
    AdminNavbarComponent,
    CustomerFeedbackComponent,
    CustomerProfileComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
