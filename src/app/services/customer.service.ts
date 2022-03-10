import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public currentSelectedCategory$: any = new BehaviorSubject('mobile');

  constructor() {}
}
