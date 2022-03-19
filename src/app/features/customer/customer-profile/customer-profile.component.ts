import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'shopping-corner-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  public userProfile: any = [];
  public userProfileForm!: FormGroup;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.userProfileForm = new FormGroup({
      'name': new FormControl(),
      'email': new FormControl(),
      'address': new FormControl(),
      'gender': new FormControl()
    });
    this.userInfo();
  }

  /**
   * userInfo
   */
  public userInfo() {
    this.profileService.getUserInfo().then((res: any) => {
      if (res[1]?.role === "customer") {
        this.userProfileForm.setValue({
          name: res[1].name,
          address: res[1]?.address,
          email: res[1]?.email,
          gender: res[1]?.gender,
        })
        this.userProfile = res[1]
      }
    })
  }

  /**
   * onSumbit
   */
  public onSumbit() {
    console.log("This is Profile!!");
  }

}
