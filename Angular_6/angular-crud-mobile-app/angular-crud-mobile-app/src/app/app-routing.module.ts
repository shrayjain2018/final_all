import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MobilelistComponent } from './components/mobilelist/mobilelist.component';
import { AddmobileComponent } from './components/addmobile/addmobile.component';
import { EditmobileComponent } from './components/editmobile/editmobile.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'mobilelist', component:MobilelistComponent},
  {path:'addmobile', component:AddmobileComponent},
  {path:'editmobile', component:EditmobileComponent},
  {path:'**', component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
