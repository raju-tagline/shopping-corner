import { ProfileService } from 'src/app/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent implements OnInit {
  public userArr: any = [];
  public isUser: boolean = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getUserInfo().then((res: any) => {
      this.userArr = res;
      this.isUser = true;
    });
  }
}
