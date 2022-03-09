import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public basePath = 'products';
  public basePathRef = this.db.database.ref(this.basePath);

  constructor(private db: AngularFireDatabase) {}

  /**
   * addProduct
   */
  public addProduct() {}

  /**
   * getProduct
   */
  public getProduct() {
    return new Promise((resolve, reject) => {
      this.basePathRef.on('value', (data: any) => {
        const allProductList = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            productId: key,
          };
        });
        resolve(allProductList);
      });
    });
  }

  /**
   * updateProduct
   */
  public updateProduct(key: string, updateProductDetails: any) {
    const basePath = this.db.database.ref(`${this.basePath}/${key}`);
    basePath.update(updateProductDetails);
  }
}
