import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  
  constructor(private userService:UserService){}

  users:any = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((users:any) => {
      this.users = users;
    });
  }

  deleteUser(userId:number){
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
    this.userService.deleteUser(userId).subscribe((resonse)=>
    this.loadUsers());}
    
  }


  searchUsers(): void {
    console.log('Search term:', this.searchTerm);
  
    if (this.searchTerm.trim() === '') {
      this.loadUsers();
    } else {
      this.userService.searchUsers(this.searchTerm).subscribe(
        (filteredUsers) => {
          console.log('Filtered users:', filteredUsers);
          this.users = filteredUsers;
        },
        (error) => {
          console.error('Error searching users:', error);
        }
      );
    }
  }
  

}
