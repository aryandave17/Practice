import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'   // Service poore app me available app.module me reg karne ki jaroorat nahi 
})
export class ProductService {

  private  api ='https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  // Read 

  getProduct(){
    return this.http.get<any>(this.api);
  }

  // Create 

  addProduct(product : any ){
    return this.http.post(this.api + '/add', product);
  }

  // Update 

  UpdateProduct(id : number, product : any){
    return this.http.put(this.api  + '/' + id, product);
  }

  // Delete 

  Deleteproduct(id : number){
    return this.http.delete(this.api + '/' + id);
  }

}
