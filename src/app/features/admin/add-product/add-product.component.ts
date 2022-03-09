import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shopping-corner-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public addProductForm!: FormGroup;
  public basePath = this.db.database.ref('/products');
  public editableProduct: any = null;

  constructor(
    private db: AngularFireDatabase,
    private productService: ProductService,
    private router:Router
  ) {
    const tempEditableProduct: any = localStorage.getItem('isEditableProduct');
    this.editableProduct = JSON.parse(tempEditableProduct);
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
    const updateProduct = this.addProductForm.setValue({
      category: this.editableProduct.category,
      description: this.editableProduct.description,
      image: this.editableProduct.image,
      price: this.editableProduct.price,
      productName: this.editableProduct.productName,
    });
  }

  //create product
  public createProduct(): void {
    this.productService.addProduct(this.addProductForm.value);
    this.router.navigate(['admin/product-list']);
    this.addProductForm.reset();
  }

  //update product
  public editProduct() {
    const key = this.editableProduct.productId;
    this.productService.updateProduct(key, this.addProductForm.value);
    localStorage.removeItem('isEditableProduct');
    this.addProductForm.reset();
    this.router.navigate(['admin/product-list']);
  }

  public onSumbit(): void {
    if (this.editableProduct?.productId) {
      this.editProduct();
    } else {
      this.createProduct();
    }
  }
}
