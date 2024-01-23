import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }


  public setRoles(roles:[]){
    localStorage.setItem('roles',JSON.stringify(roles));
  }

  public getRoles():[]{
    const storedRoles = localStorage.getItem('roles');
    return storedRoles ? JSON.parse(storedRoles) : [];
  }

  public setToken(JwtToken:string){
    localStorage.setItem('jwtToken',JwtToken);
  }

  public getToken():string{
    let token= localStorage.getItem('jwtToken');
    return token || '';
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

}
