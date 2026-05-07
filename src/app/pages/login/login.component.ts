import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)


    loginForm : FormGroup = new FormGroup ({
    username : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,}$/)])
  })


  submitForm(){
       const storedUser = localStorage.getItem('registeredUser');

       if (!storedUser){
        alert('No registered user found. Please register first.');
        return;
       }

       const parsedUser = JSON.parse(storedUser);

       if(this.loginForm.value.username === parsedUser.username && this.loginForm.value.password === parsedUser.password){
        this.authService.login({
          username: 'emilys' ,
          password: 'emilyspass'
        }).subscribe({
          next:(res)=>{
            this.authService.saveToken(res.accessToken);
            this.router.navigate(['/home'])
          },
          error:(err)=>{
            console.log(err);
            
            alert('Login failed. Please check your credentials and try again.');    
          }
        })
       }
  }

  

}
