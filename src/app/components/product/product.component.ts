import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  products : any[] = [];
  productName = '';
  productPrice = '';

  constructor (private productservice : ProductService){}

  ngOnInit(): void {
    this.loadproducts();
  }

  loadproducts(){
    this.productservice.getProduct().subscribe(res => {
      this.products = res.products;
    });
  }

  addProduct(){
    const newProduct ={
      title : this.productName,
      Price: this.productPrice
    };
   console.log(this.productName, this.productPrice);

    this.productservice.addProduct(newProduct).subscribe(() => {
      this.loadproducts();
      this.productName = '';
      this.productPrice = '';
    });
  }

    deleteProduct(id : number){
      this.productservice.Deleteproduct(id).subscribe(() => {
        this.loadproducts();
      });
    }


  }

