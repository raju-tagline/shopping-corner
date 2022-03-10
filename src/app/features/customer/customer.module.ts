import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from 'src/app/features/customer/customer-routing.module';
import { DashboardComponent } from 'src/app/features/customer/dashboard/dashboard.component';
import { DealsComponent } from 'src/app/features/customer/deals/deals.component';
import { BooksComponent } from 'src/app/features/customer/books/books.component';
import { MobilesComponent } from 'src/app/features/customer/mobiles/mobiles.component';
import { CustomerServiceComponent } from 'src/app/features/customer/customer-service/customer-service.component';
import { ClothesComponent } from 'src/app/features/customer/clothes/clothes.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DealsComponent,
    BooksComponent,
    MobilesComponent,
    CustomerServiceComponent,
    ClothesComponent,
    CustomerNavbarComponent,
    ShowProductComponent,
    CheckOutComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CustomerModule {}
