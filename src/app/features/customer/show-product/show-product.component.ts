import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'shopping-corner-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss'],
})
export class ShowProductComponent implements OnInit {
  public allProducts: any = [];
  public filterProducts: any = [];
  public orderDetails: any = [];
  public userCartList: any = [];
  public currentSelectedCategory: string = 'Mobile';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.categorySelectionChange();
  }

  /**
   * categorySelectionChange
   */
  public categorySelectionChange() {
    this.customerService.currentSelectedCategory$.subscribe(
      (currentSelectedCategory: string) => {
        this.filterProducts = this.allProducts.filter(
          (product: any) => product.category === currentSelectedCategory
        );
        this.currentSelectedCategory = currentSelectedCategory;
      }
    );
  }

  /**
   * getProducts
   */
  public getProducts() {
    this.productService.getProduct().then((products: any) => {
      this.allProducts = products;
      this.categorySelectionChange();
    });
  }

  /**
   * addToCart
   */
  public addToCart(productId: any) {
    this.cartService.getAllCarts().then((cartList: any) => {
      const userCart = cartList?.find(
        (cart: any) =>
          cart?.productId === productId &&
          cart?.customerId === localStorage.getItem('customerId')
      );
      this.cartService.cartDetail$.next(cartList);
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
      this.cartService.getAllCarts();
    });
  }
}
