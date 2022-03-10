import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public basePath = this.db.database.ref('/cart');

  constructor(private db: AngularFireDatabase) {
    // this.createCart();
    this.getAllCarts();
    // this.remove();
    this.updaterCart();
  }

  //craete data
  public createCart(): void {
    const data = {
      name: 'product1',
      price: 12000,
    };
    this.basePath.push(data);
  }

  //get data
  public getAllCarts(): void {
    const cartArrayCheck = [];
    this.basePath.on('value', (data: any) => {
      const allCarts = Object.keys(data.val()).map((key) => {
        return {
          ...data.val()[key],
          cartId: key,
        };
      });
    });
  }

  //remove data
  public remove(id: string = '-MxcO_DhbOUdRoO3O-l0') {
    const basePath = this.db.database.ref('/cart/' + id);
    basePath.remove();
  }

  //update data
  public updaterCart(): void {
    const data = {
      name: 'prouct15646 ',
      price: 6666,
    };
    const basePath = this.db.database.ref('cart/' + '-MxcO_Dk2LoLxIzPR7fd');
    basePath.update(data);
  }
}
