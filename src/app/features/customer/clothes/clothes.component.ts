import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss'],
})
export class ClothesComponent implements OnInit {
  public clotheProduct: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProduct().then((products: any) => {
      this.clotheProduct = products?.filter(
        (product: any) => product.category === 'Clothe'
      );
      console.log('products :>> ', products);
      console.log('this.clotheProduct :>> ', this.clotheProduct);
    });
  }
}
