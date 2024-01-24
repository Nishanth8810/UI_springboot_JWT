import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  userId:any;
constructor(private userService:UserService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];  
  }

    updateUser(editForm:NgForm): void {
    this.userService.updateUser(this.userId,editForm).subscribe((response) => {
      console.log('User updated successfully:', response);
      this.router.navigate(['/admin']);
    },error=>{
      console.log(error);
      
    });
  }
}


