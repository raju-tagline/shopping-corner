import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public basePath = this.db.database.ref('/user');


  constructor(private db: AngularFireDatabase) { 
    // this.getUserInfo();
  }

  public getUserInfo(): any {
    return new Promise((resolve, reject) => {
      this.basePath.on('value', (data: any) => {
        const userProfile = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            userId: key,
          };
        });
        resolve(userProfile)
      });
    });
  }

}
