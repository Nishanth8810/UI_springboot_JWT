import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API='http://localhost:8080';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpClient:HttpClient,
    private userAuthService:UserAuthService) { }

    private getHeaders(): HttpHeaders {
      const token = this.userAuthService.getToken();
      console.log(token);
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }

    public forUser() {
      return this.httpClient.get(this.PATH_OF_API + '/getUser', {
        headers:this.getHeaders()
      });
    }

  public login(loginData:NgForm){
    return this.httpClient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  updateUser(userId: number, updatedUserForm: NgForm) {

    const updatedUser = {
      email: updatedUserForm.value.email,
    };



    return this.httpClient.put(`${this.PATH_OF_API}/user/update/${userId}`, updatedUser,{
      responseType:'text'
    });
  }
  
  registerUser(form: NgForm) {
    return this.httpClient.post(this.PATH_OF_API + '/register', form,{
     responseType:'text',
     headers:this.getHeaders()
    } );
  }

  uploadFile(file: File): any {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(`${this.PATH_OF_API}/user/4/upload-profile-picture`, formData
    );
  }

  getAllUsers() {
    return this.httpClient.get(this.PATH_OF_API +'/admin/allUsers',{
     
    });
  }

  deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.PATH_OF_API}/admin/delete/${userId}`);
  }



  searchUsers(searchTerm: string): Observable<any> {
    return this.httpClient.get<any>(`${this.PATH_OF_API}/admin/search?term=${searchTerm}`);
  }
 

  public roleMatch(allowedRoles:any):any{
    let isMatch=false;
    const userRoles:any=this.userAuthService.getRoles();

    if(userRoles != null && userRoles){
      for(let i =0;i<userRoles.length;i++){
        for(let j=0;j<allowedRoles.length;j++){
          if(userRoles[i].roleName===allowedRoles[j]){
            isMatch=true;
            return isMatch;
          }
          return isMatch;
        }
      }
    }

  }
}
