import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartLength$: any = new BehaviorSubject(0);
  public cartDetails: any = [];
  public cartDetail$: any = new BehaviorSubject(0);
  public cartInfo$: any = new BehaviorSubject(0);
  public basePath = this.db.database.ref('/carts');

  constructor(private db: AngularFireDatabase) {
    this.getAllCarts();
  }

  //craete data
  public createCart(data: any): void {
    this.basePath.push(data);
  }

  //craete data
  public updateCart(key: any, data: any): void {
    const basePath = this.db.database.ref('/carts/' + key);
    basePath.update(data);
  }

  //get data
  public getAllCarts(): any {
    return new Promise((resolve, reject) => {
      this.basePath.on('value', (data: any) => {
        const allCarts = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            cartId: key,
          };
        });
        this.cartDetails = allCarts?.filter(
          (cart: any) => cart?.customerId === localStorage.getItem('customerId')
        );
        this.cartLength$.next(this.cartDetails.length);
        resolve(allCarts);
      });
    });
  }

  //remove data
  public removeCart(key: string) {
    
    return new Promise((resolve, reject) => {
      const basePath = this.db.database.ref('/carts/' + key);
      console.log('key :>> ', key);
      resolve(basePath.remove());
    });
  }
}
