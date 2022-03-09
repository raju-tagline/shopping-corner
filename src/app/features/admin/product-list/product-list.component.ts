import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList = [
    {
      key: 'auther1product1',
      name: 'product-1',
      price: 100,
      auther: 'tester',
      Description: 'there is the first every product',
    },
    {
      key: 'auther1product2',
      name: 'product-2',
      price: 200,
      auther: 'tester',
      Description: 'there is the first every product',
    },
    {
      key: 'auther1product3',
      name: 'product-3',
      price: 300,
      auther: 'tester',
      Description: 'there is the first every product',
    },
    {
      key: 'auther1product4',
      name: 'product-4',
      price: 400,
      auther: 'tester',
      Description: 'there is the first every product',
    },
    {
      key: 'auther1product5',
      name: 'product-5',
      price: 500,
      auther: 'tester',
      Description: 'there is the first every product',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public editProduct(key: string): void {
    console.log('EDIT :>> ', key);
  }

  public removeProduct(key: string): void {
    window.alert('Are you sure you want delete');
    console.log('REMOVE :>> ', key);
  }
}
