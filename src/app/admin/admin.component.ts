import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { log } from 'console';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  constructor(private userService:UserService){}

  users:any = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((users:any) => {
      console.log(users);
      this.users = users;
    });
  }

  deleteUser(userId:BigInteger){
    
  }

  editUser(userId:BigInt){

  }

}
