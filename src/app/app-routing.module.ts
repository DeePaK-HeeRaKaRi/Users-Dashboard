import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
 
import { AddUsersComponent } from './users/add-users/add-users.component';
import { DeleteUsersComponent } from './users/delete-users/delete-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sidebar', component: SidebarComponent },

 
  // to edit or delete we need list/edit/1   & list/delete/1
  {
    path: 'users',
    children: [
      { path: '', component: ListUsersComponent },
      { path: 'list', component: ListUsersComponent },
      { path: 'view/:id', component: ViewUsersComponent },
      { path: 'delete/:id', component: DeleteUsersComponent },
      { path: 'edit/:id', component: EditUsersComponent },
      { path: 'create', component: AddUsersComponent },
    ]
  },
 
  // roles is a lazy loading module
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
