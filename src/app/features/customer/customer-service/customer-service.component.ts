import { Router } from '@angular/router';
import { FeedbackService } from './../../../services/feedback.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss'],
})
export class CustomerServiceComponent implements OnInit {
  public feedBackForm!: FormGroup;

  constructor(
    private feedbackService: FeedbackService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.feedBackForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      feedBack: new FormControl(null, Validators.required),
    });
  }
  public onSumbit(): void {
    if (this.feedBackForm.valid) {
      const feedback = this.feedBackForm.value;
      this.feedbackService.feedback(feedback);
      this.feedBackForm.reset();
      this.router.navigate(['/customer/deal']);
      alert('Thanks For Feedback');
    } else {
      alert('Please enter valid value !');
    }
  }
}
