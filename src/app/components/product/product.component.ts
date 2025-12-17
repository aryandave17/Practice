import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  products: any[] = [];

  productName: string = '';
  productPrice: number | null = null;

  ngOnInit() {}

  addProduct() {
    const newProduct = {
      id: Date.now(),
      title: this.productName,
      price: this.productPrice
    };

    this.products = [...this.products, newProduct]; 
    this.productName = '';
    this.productPrice = null;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
