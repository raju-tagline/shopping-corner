import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  public allProductDetails: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().then((res) => {
      this.allProductDetails = res;
      console.log('TODAY RESPONSE :>> ', res);
    });
  }
}
