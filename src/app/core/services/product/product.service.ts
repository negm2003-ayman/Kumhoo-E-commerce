import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProducts(limit: number , skip: number):Observable<any>{
    return this.httpClient.get(` https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  }

  singleProduct(id: string):Observable<any>{
    return this.httpClient.get( `https://dummyjson.com/products/${id}`);
}



sortProduct():Observable<any>{
  return this.httpClient.get('https://dummyjson.com/products?limit=40')
}
}