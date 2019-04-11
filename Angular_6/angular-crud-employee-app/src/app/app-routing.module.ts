import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EdituserComponent } from './components/edituser/edituser.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listuser', component: ListUserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'edituser', component: EdituserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
