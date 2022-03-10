import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  public basePath = this.db.database.ref('/customer-feedback');

  constructor(private db: AngularFireDatabase) {}

  /**
   * feedback
   */
  public feedback(customerFeedback:any) {
    return new Promise((resolve, reject) => {
      this.basePath.push(customerFeedback);
      resolve(customerFeedback);
    });
  }

  /**
   * getFeedback
   */
  public getFeedback() {
    return new Promise((resolve, reject) => {
      this.basePath.on('value', (data: any) => {
        const allFeedback = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            feedbackId: key,
          };
        });
        resolve(allFeedback);
      });
    });
  }

  /**
   * removeFeedback
   */
  public removeFeedback(key:string) {
     return new Promise((resolve, reject) => {
       const basePath = this.db.database.ref('/customer-feedback/' + key);
       resolve(basePath.remove());
     });
  }
}
