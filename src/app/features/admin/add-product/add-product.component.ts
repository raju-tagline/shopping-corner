import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-corner-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public addProductForm!: FormGroup;
  public basePath = this.db.database.ref('/products');

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      productName: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
    });
  }

  public createCart(): void {
    const data = {
      productName: this.addProductForm.value.productName,
      price: this.addProductForm.value.price,
      image: this.addProductForm.value.image,
      category:this.addProductForm.value.category,
      description: this.addProductForm.value.description,
    };
    this.basePath.push(data);
  }
  public onSumbit(): void {
    this.createCart();
  }
}
