import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() buttonText?: string = 'Go Back';

  constructor() {}

  ngOnInit(): void {}

  public previousPage(): void {
    history.back();
  }
}
