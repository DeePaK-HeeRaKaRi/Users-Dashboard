import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  userId:any;
  userDetails:any;
  dataloaded:boolean=false;
  edituserform:FormGroup =new FormGroup({})
   
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private  fb:FormBuilder,private matSnackBar:MatSnackBar) { }

  ngOnInit(): void {
    // view user details
    this.activatedRoute.params.subscribe(data => {
      this.userId=data['id']
    })
    if(this.userId!==''){
      this.userService.viewusers(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails=data;
        console.log(this.userDetails)
        // build the edit form
        this.edituserform=this.fb.group({
          'username':new FormControl(this.userDetails.name),
          'email':new FormControl(this.userDetails.email),
        })
        this.dataloaded=true;
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  updateUser(){
    console.log(this.edituserform.value)
    this.userService.updateusers(this.userId,this.edituserform.value).subscribe(data => {
      console.log('User Updated')
      this.matSnackBar.open("User is Successfully Updated")
    },err =>{
      console.log("Unable To Add Users",err)
      this.matSnackBar.open("Unable to  Update the User  ")
    })
  }

}

