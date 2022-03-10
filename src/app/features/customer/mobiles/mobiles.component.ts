import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss'],
})
export class MobilesComponent implements OnInit {
  public mobileProducts:any = []
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
   }
  
  /**
   * getProducts
   */
  public getProducts() {
    this.productService.getProduct().then((products:any) => {
      this.mobileProducts = products?.filter((product:any) => product.category === 'Phones' );
      console.log('products :>> ', products);
      console.log('this.mobileProducts :>> ', this.mobileProducts);
    })
  }
}
