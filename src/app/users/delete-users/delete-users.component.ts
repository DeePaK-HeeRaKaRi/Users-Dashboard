import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
 

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.scss']
})
export class DeleteUsersComponent implements OnInit {
  userId: string = '';
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private matSnackBar: MatSnackBar,private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
      // id is used in routing path 
    })
    if (this.userId) {
      this.userService.deleteuser(this.userId).subscribe(data => {
        console.log('User Deleted', data)
        this.matSnackBar.open("User is Deleted Successfully ")
        // this.route.navigateByUrl('localhost:4200/users/list')
      }, err => {
        console.log("Unable To Add Users", err)
        this.matSnackBar.open("Unable to Delete the User ")
      })
    }
  }

}
