import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {


  user:any;
  constructor(private userService: UserService) {
    this.forUser();
   }
  

  ngOnInit(): void {
    
  }

forUser() {
    this.userService.forUser().subscribe(
      (response) => {
        console.log(response);
        this.user = response;
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }


  // onFileSelected(event: any): void {
  //   const file: File = event.target.files[0];
  //   this.userService.uploadFile(file).subscribe(
  //     (response:any) => {
  //       console.log('File uploaded successfully:', response);
  //     },
  //     (error:any) => {
  //       console.error('Error uploading file:', error);
  //     }
  //   );
  //   }
  }
 


