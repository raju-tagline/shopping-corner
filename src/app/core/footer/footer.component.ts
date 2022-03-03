import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public year: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
