import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from 'src/app/features/admin/admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [DashboardComponent, ProductListComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
