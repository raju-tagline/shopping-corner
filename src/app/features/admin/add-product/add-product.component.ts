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
  public editableProduct: any = null;

  constructor(private db: AngularFireDatabase) {
    const tempEditableProduct: any = localStorage.getItem('isEditableProduct');
    this.editableProduct = JSON.parse(tempEditableProduct);
    console.log('obj :>> ', this.editableProduct);
    // this.setEditableProductValue();
    // console.log('localStorage.getItem(isEditableProduct) :>> ', JSON.parse(localStorage.getItem('isEditableProduct')));
  }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      productName: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
    });
    if (this.editableProduct) {
      this.setEditableProductValue();
    }
  }

  /**
   * setEditableProductValue
   */
  public setEditableProductValue() {
   this.addProductForm.setValue({
      productName: this.editableProduct.productName,
      price: this.editableProduct.price,
      image: this.editableProduct.image,
      category: this.editableProduct.category,
      description: this.editableProduct.description,
    });
  }

  public createProduct(): void {
    console.log('createProduct');
    this.basePath.push(this.addProductForm.value);
    this.addProductForm.reset();
  }

   public updaterCart(): void {
    // const data = {
    //   name: 'prouct15646 ',
    //   price: 6666,
    // };
    // console.log('data :>> ', data);
    // const basePath = this.db.database.ref('products/' + '-MxcO_Dk2LoLxIzPR7fd');
    // basePath.update(data);
  }

  public editProduct() {
    const key = this.editableProduct.productId;
    const basePath = this.db.database.ref('products/' + key);
    console.log('editProduct');
    basePath.update(this.editableProduct);
    localStorage.removeItem('isEditableProduct');
    this.addProductForm.reset();
    console.log("PRODUCAT UPDATED SUCCESSFULLY");
  }

  public onSumbit(): void {
    console.log('this.editableProduct :>> ', this.editableProduct);
    if (this.editableProduct?.productId) {
      this.editProduct();
    } else {
      this.createProduct();
    } 
  }
}
