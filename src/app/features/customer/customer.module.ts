import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from 'src/app/features/customer/customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DealsComponent } from './deals/deals.component';
import { BooksComponent } from './books/books.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DealsComponent,
    BooksComponent,
    MobilesComponent,
    CustomerServiceComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CustomerModule {}
