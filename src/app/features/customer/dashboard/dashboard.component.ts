import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() public hideData?: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
