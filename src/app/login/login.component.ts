import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { error, log } from 'console';
import e, { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  constructor(private userService:UserService,
    private authService:UserAuthService,
    private router:Router){}

  login(loginFrom:NgForm){
    this.userService.login(loginFrom.value).subscribe(
      (response:any)=>{
       this.authService.setRoles(response.user.role);
       this.authService.setToken(response.jwtToken);
       const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  
}
