import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public bookProducts: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * getProducts
   */
  public getProducts() {
    this.productService.getProduct().then((products: any) => {
      this.bookProducts = products?.filter(
        (product: any) => product.category === 'Books'
      );
    });
  }
}
