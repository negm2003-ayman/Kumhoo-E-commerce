import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }



  categoryList():Observable<any>{
    return this.httpClient.get('https://dummyjson.com/products/category-list');
}


  productByCategory(category:any):Observable<any>{
    return this.httpClient.get(`https://dummyjson.com/products/category/${category}`);  
}

}
