import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authService = inject(AuthService)


    registerForm : FormGroup = new FormGroup ({
    username : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,}$/)])
  })


  submitForm(){
    this.authService.login(this.registerForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:(err)=>{
        console.log(err);
        
      }
    })    
  }

}
