import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'shopping-corner-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public basePath = this.db.database.ref('/products');
  public productList: any = [];

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  //all product
  public getAllProducts(): void {
    this.productService.getProduct().then((res) => (this.productList = res));
  }

  //edit update produtc
  public editProduct(product: any): void {
    this.router.navigate(['/admin/add-product']);
    localStorage.setItem('isEditableProduct', JSON.stringify(product));
  }

  //remove produtc
  public removeProduct(key: string): void {
    this.productService.removeProduct(key);
    window.alert('Are you sure you want delete');
    this.getAllProducts();
  }
}
