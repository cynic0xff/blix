import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    console.log(obj);

    this.http.post(`${this.url}/add`, obj)
    .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this.http.get(`${this.url}`);
  }
}
