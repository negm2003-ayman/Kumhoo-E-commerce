import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly Router = inject(Router)


  registerForm : FormGroup = new FormGroup ({
    username : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    email : new FormControl(null , [Validators.required , Validators.email]),
    phoneNumber : new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,}$/)])
  })


  submitForm(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    localStorage.setItem('registeredUser' , JSON.stringify(this.registerForm.value))

    console.log(this.registerForm.value);
    this.Router.navigate(['/login']);

    
  }

}
