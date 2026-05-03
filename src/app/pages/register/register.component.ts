import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerForm : FormGroup = new FormGroup ({
    username : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    email : new FormControl(null , [Validators.required , Validators.email]),
    phoneNumber : new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,}$/)])
  })


  submitForm(){
    console.log(this.registerForm);
    
  }

}
