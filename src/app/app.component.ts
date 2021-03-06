import { DatabaseService } from 'src/app/services/database.service';
import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'shopping-corner-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-corner';
  constructor(
    private databaseService: DatabaseService,
    private CartService: CartService
  ) {}
}
