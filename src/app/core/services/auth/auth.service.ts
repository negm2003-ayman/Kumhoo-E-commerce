import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient , private router:Router) {}


  login(data:object):Observable<any>{
    return this.httpClient.post(`https://dummyjson.com/auth/login` , {
      data,
      expiresInMins: 60
    })
  }

  saveToken(token:string){
    localStorage.setItem('token', token)
  }


}
