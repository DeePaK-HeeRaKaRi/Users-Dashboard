import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/list-users/list-users.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl:string='https://jsonplaceholder.cypress.io/';
  constructor(private http:HttpClient) { }
  listusers():Observable<User[]>{
    return this.http.get<User[]>(this.baseurl+'users');
  }
  viewusers(id:string){
    return this.http.get(this.baseurl+'users/'+id);
  }
  addUser(userobj:any){
    return this.http.post(this.baseurl + 'users',userobj)
  }
  deleteuser(deleteid:any){
    return this.http.delete(this.baseurl + 'users/'+ deleteid)
  }
  updateusers(id:any,body:any){
    return this.http.put(this.baseurl +'users/'+id ,body)
  }
}
