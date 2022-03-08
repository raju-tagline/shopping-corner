import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shopping-corner-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
    console.log('this.router.url :>> ', this.router.url);
  }
}
