import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EdituserComponent } from './components/edituser/edituser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListUserComponent,
    AdduserComponent,
    EdituserComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
