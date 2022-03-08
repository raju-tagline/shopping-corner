import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'shopping-corner-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isCustomer: boolean = true;
  public currentRoute!: string;

  constructor(private router: Router) {
    this.currentRoute = '';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url.split(/[?#]/)[0];
        console.log('this.currentRoute :>> ', this.currentRoute);

        if (this.currentRoute.includes('/customer/')) {
          this.isCustomer = true;
        }

        if (this.currentRoute.includes('/admin/')) {
          this.isCustomer = false;
        }

        if (this.currentRoute.includes('/login/')) {
          this.isCustomer = true;
        }
        // if (event.url.slice(0, 10) === '/customer/') {
        //   console.log('CUSTOMER WORKS!!!');
        // } else if (event.url.slice(0, 6) === '/admin/') {
        //   console.log('ADMIN WORKS!!');
        //   // this.isCustomer = false;
        // } else {
        //   console.log('LOGIN WORK!!');
        //   this.isCustomer = true;
        // }
      }

      // if (event instanceof NavigationEnd) {
      //   // Hide progress spinner or progress bar
      //   this.currentRoute = event.url;
      //   console.log(event);
      // }

      // if (event instanceof NavigationError) {
      //   // Hide progress spinner or progress bar

      //   // Present error to user
      //   console.log(event.error);
      // }
    });
  }

  ngOnInit(): void {
    // this.router.events.subscribe((val) => {
    //   // see also
    //   console.log(val instanceof NavigationEnd);
    // });
    // console.log('this.router.url :>> ', this.router.url);
    // if (this.router.url == '/customer/dashboard') {
    //   this.isCustomer = false;
    //   console.log('customer is working');
    // } else {
    //   console.log('admin works11');
    //   this.isCustomer = false;
    // }
  }
}
