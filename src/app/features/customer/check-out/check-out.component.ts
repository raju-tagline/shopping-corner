import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'shopping-corner-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  public productId!: string;
  public cartIdData: any = [];
  public cartArr: any = [];
  public qtyArr: any = [];
  public cartDataList: any = [];
  public isCheckOut: boolean = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    // this.cartData();
  }

  ngOnInit(): void {
    this.showAllProduct();
  }

  /**
   * showAllProduct
   */
  public showAllProduct() {
    this.cartService.getAllCarts().then((resp: any) => {
      if (resp) {
        this.productService.getProduct().then((products: any) => {
          resp.forEach((element: any) => {
            const data: any = products.find(
              (product: any) => element.productId === product.productId,
              (this.isCheckOut = true)
            );
            const cartList = {
              ...data,
              qty: element.qty,
            };
            this.cartIdData.push(cartList);
          });
        });
      }
    });
  }

  /**
   * removeProduct(p.id)
   */
  public removeProduct(id: string) {
    this.cartService.removeCart(id);
    // const index = this.cartIdData.findIndex((ele: any) => ele.productId === id);
    // this.cartIdData.slice(index, 1);
  }
}
