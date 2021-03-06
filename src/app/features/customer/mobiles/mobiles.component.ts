import { AddToCartService } from './../../../services/add-to-cart.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

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
    private cartService: CartService
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
  public addToCart(productId: any) {
    this.cartService.getAllCarts().then((cartList: any) => {
      const userCart = cartList?.find(
        (cart: any) =>
          cart.productId === productId &&
          cart.customerId === localStorage.getItem('customerId')
      );
      if (userCart) {
        const updatedUserCartDetails = {
          ...userCart,
          qty: userCart.qty + 1,
        };
        this.cartService.updateCart(
          updatedUserCartDetails.cartId,
          updatedUserCartDetails
        );
      } else {
        const data = {
          productId: productId,
          customerId: localStorage.getItem('customerId'),
          qty: 1,
        };
        this.cartService.createCart(data);
      }
    });
  }
}
