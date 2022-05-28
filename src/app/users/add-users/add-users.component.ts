import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  addUserForm: FormGroup =new FormGroup({})
  constructor(private fb:FormBuilder,private userService:UserService,private matSnackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm=this.fb.group({
      'username': new FormControl('',[Validators.required,Validators.minLength(10)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'phone':new FormControl('',[Validators.required,Validators.maxLength(10)])
    })
  }
  
  createUser(){
    console.log(this.addUserForm.value)
  }
   

}
