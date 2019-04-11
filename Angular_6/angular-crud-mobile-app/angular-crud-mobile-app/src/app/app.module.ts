import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MobilelistComponent } from './components/mobilelist/mobilelist.component';
import { AddmobileComponent } from './components/addmobile/addmobile.component';
import { EditmobileComponent } from './components/editmobile/editmobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErrorpageComponent,
    LoginComponent,
    RegisterComponent,
    MobilelistComponent,
    AddmobileComponent,
    EditmobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
