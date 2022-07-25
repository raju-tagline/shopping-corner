import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'shopping-corner-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent implements OnInit {
  public userProfile: any = [];
  public userAddress: any = [];
  public userProfileForm!: FormGroup;
  public isCustomerInfo: boolean = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.userProfileForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      gender: new FormControl(),
    });
    this.userInfo();
  }

  /**
   * userInfo
   */
  public userInfo() {
    this.profileService.getUserInfo().then((res: any) => {
      const address = {
        city: res[1]?.address?.city,
        house_no: res[1]?.address?.house_no,
        state: res[1]?.address?.state,
        zipcode: res[1]?.address?.zipcode,
      };
      const USERADRESS = this.userAddress.push(address);
      if (res[1]?.role === 'customer') {
        this.userProfileForm.setValue({
          name: res[1].name,
          address: USERADRESS,
          email: res[1]?.email,
          gender: res[1]?.gender,
        });
        this.userProfile = res[1];
        this.isCustomerInfo = true;
      }
    });
  }

  /**
   * onSumbit
   */
  public onSumbit() {
    console.log('This is Profile!!');
  }
}
