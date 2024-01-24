import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(private userService: UserService,private router:Router){
    
  }

  registerUser(registerForm:NgForm){
      this.userService.registerUser(registerForm.value)
        .subscribe((response) => {
            this.router.navigate(['/login']);
            console.log(response);
            
          },
          error => {
            console.error('Registration failed:', error);
          }
        )
    }

  }



