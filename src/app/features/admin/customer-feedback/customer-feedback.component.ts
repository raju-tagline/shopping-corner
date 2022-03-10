import { FeedbackService } from './../../../services/feedback.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.scss'],
})
export class CustomerFeedbackComponent implements OnInit {
  public feedbackList: any = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.getAllFeedback();
  }

  /**
   * getAllFeedback
   */
  public getAllFeedback() {
    this.feedbackService.getFeedback().then((res) => {
      this.feedbackList = res;
      console.log('res :>> ', res);
    });
  }

  /**
   * removeFeedback
   */
  public removeFeedback(feedId: string) {
    this.feedbackService.removeFeedback(feedId)
    this.getAllFeedback();
  }
}
