import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shopping-corner-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
    if (this.router.url==='/customer/dashboard') {
      
    }
  }
}
