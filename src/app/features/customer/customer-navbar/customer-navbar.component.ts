import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shopping-corner-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss'],
})
export class CustomerNavbarComponent implements OnInit {
  public isLogedIn:boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public logOut(): void {
    this.authService.logout();
    this.router.navigate(['/user']);
    localStorage.removeItem('customerId');
    this.isLogedIn = true;
  }
}
