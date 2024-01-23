import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import {  Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authService:UserAuthService,private router:Router,
    public userService:UserService){}

  isLogged(){
   return this.authService.isLoggedIn();
  }
  public logout() {
    this.authService.clear();
    this.router.navigate(['/home']);
  }

}
