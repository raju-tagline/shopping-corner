import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public basePath = this.db.database.ref('/products');
  public productList = [
    {
      productId: '',
      productName: '',
      price: null,
      category: '',
      image: '',
      description: '',
    },
  ];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  //all product
  public getAllProducts(): void {
    const cartArrayCheck = [];
    this.basePath.on('value', (data: any) => {
      const allCarts = Object.keys(data.val()).map((key) => {
        return {
          ...data.val()[key],
          productId: key,
        };
      });
      this.productList = allCarts;
      // console.log('this.productList :>> ', this.productList);
    });
  }

  // public updaterCart(): void {
  //   const data = {
  //     name: 'prouct15646 ',
  //     price: 6666,
  //   };
  //   // console.log('data :>> ', data);
  //   const basePath = this.db.database.ref('products/' + '-MxcO_Dk2LoLxIzPR7fd');
  //   basePath.update(data);
  // }

  //edit update produtc
  public editProduct(product: any): void {
    // const basePath = this.db.database.ref('products/' + key);

    localStorage.setItem('isEditableProduct', JSON.stringify(product));
    console.log('EDIT :>> ', product);
  }

  //remove produtc
  public removeProduct(key: string): void {
    const basePath = this.db.database.ref('/products/' + key);
    basePath.remove();
    window.alert('Are you sure you want delete');
    console.log('REMOVE :>> ', key);
  }
}
