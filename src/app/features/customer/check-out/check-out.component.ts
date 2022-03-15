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
  public cartList: any = [];
  public productId!: string;
  public cartIdData: any = [];
  public cartArr: any = [];
  public qtyArr: any = [];
  public cartDataList: any = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    // this.cartData();
  }

  ngOnInit(): void {
    this.cartService.getAllCarts().then((res: any) => {
      this.cartList = res;
      this.cartList.map((res: any) => {
        console.log('res?.qty :>> ', res?.qty);
      });
    });

    this.productService.getProduct().then((products: any) => {
      this.cartArr = products;
      this.cartList.forEach((element: any) => {
        this.cartIdData.push(
          this.cartArr.find(
            (product: any) => element.productId === product.productId
          ), 
          { qty: element.qty }
        );
      });
    });
  }

  // /**
  //  * cartData
  //  */
  // public cartData() {
  //   this.cartService.cartInfo$.subscribe((productId: any) => {
  //     this.productService.getProduct().then((products: any) => {
  //       this.cartIdData = products?.filter((product: any) => {
  //         product.productId === productId;
  //       });
  //     });
  //   });
  // }
}
