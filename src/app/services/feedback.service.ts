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
}
