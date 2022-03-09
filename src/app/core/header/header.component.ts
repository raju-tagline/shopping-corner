import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'shopping-corner-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isCustomer!: boolean;
  public currentRoute!: string;

  constructor(private router: Router) {
    this.currentRoute = '';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url.split(/[?#]/)[0];

        if (this.currentRoute.includes('/customer/')) {
          this.isCustomer = true;
        }

        if (this.currentRoute.includes('/admin/')) {
          this.isCustomer = false;
        }

        if (this.currentRoute.includes('/user/')) {
        }
      }
    });
  }

  ngOnInit(): void {}
}
