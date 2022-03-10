import { AddToCartService } from './../../../services/add-to-cart.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss'],
})
export class MobilesComponent implements OnInit {
  public mobileProducts: any = [];
  public orderDetails: any = [];
  constructor(
    private productService: ProductService,
    private addToCartService: AddToCartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * getProducts
   */
  public getProducts() {
    this.productService.getProduct().then((products: any) => {
      this.mobileProducts = products?.filter(
        (product: any) => product.category === 'Phones'
      );
    });
  }

  /**
   * addToCart
   */
  public addToCart(productId: string) {
    this.productService.getProduct().then((products: any) => {
      this.orderDetails = products?.filter(
        (product: any) => product.productId === productId
      );
    });
  }
}
