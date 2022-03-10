import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceComponent } from '../customer-service/customer-service.component';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'shopping-corner-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss'],
})
export class CustomerNavbarComponent implements OnInit {
  public isLogedIn: boolean = false;
  public cartLength: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private customerService: CustomerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.cartLength$.subscribe(
      (cartLength: any) => (this.cartLength = cartLength)
    );
  }

  public logOut(): void {
    this.authService.logout();
    this.router.navigate(['/user']);
    localStorage.removeItem('customerId');
    this.isLogedIn = true;
  }

  /**
   * filterableCategory
   */
  public filterableCategory(categoryName: string) {
    this.customerService.currentSelectedCategory$.next(categoryName);
  }
}
