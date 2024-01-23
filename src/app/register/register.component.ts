import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(private userService: UserService){
    
  }

  registerUser(registerForm:NgForm){
      this.userService.registerUser(registerForm)
        .subscribe(
          response => {
            console.log('Registration successful:', response,'iuhj');
           
          },
          error => {
            console.error('Registration failed:', error);
            // Handle error, e.g., show an error message
          }
        );
    }

  }



