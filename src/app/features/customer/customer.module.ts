import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from 'src/app/features/customer/customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DealsComponent } from './deals/deals.component';

@NgModule({
  declarations: [DashboardComponent, DealsComponent],
  imports: [CommonModule, CustomerRoutingModule, FormsModule],
})
export class CustomerModule {}
