import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss'],
})
export class CustomerOrdersComponent implements OnInit {
  public date: Date = new Date();
  public orderList = [
    {
      key: 'customer1product1',
      name: 'product-1',
      price: 100,
      customer: 'tester',
      time: this.date,
      Description: 'there is the first every product',
    },
    {
      key: 'customer1product2',
      name: 'product-2',
      price: 200,
      customer: 'tester',
      time: this.date,
      Description: 'there is the first every product',
    },
    {
      key: 'customer1product3',
      name: 'product-3',
      price: 300,
      customer: 'tester',
      time: this.date,
      Description: 'there is the first every product',
    },
    {
      key: 'customer1product4',
      name: 'product-4',
      price: 400,
      customer: 'tester',
      time: this.date,
      Description: 'there is the first every product',
    },
    {
      key: 'customer1product5',
      name: 'product-5',
      price: 500,
      customer: 'tester',
      time: this.date,
      Description: 'there is the first every product',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public cancalOrder(key: string): void {}
}
