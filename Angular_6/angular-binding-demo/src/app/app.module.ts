import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { InterpolationComponent } from './binding/interpolation.component';
import { PropertyComponent } from './binding/property.component';
import { TwoWayComponent } from './binding/two-way.component';
import { EventComponent } from './binding/event.component';
import { CustomEventComponent } from './binding/custom-event.component';

import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CustomPropertyComponent } from './binding/custom-property.component';
import { ExampleDirective } from './directive/example.directive';
import { ExampleComponent } from './directive/example.component'; 

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    InterpolationComponent,
    PropertyComponent,
    TwoWayComponent,
    EventComponent,
    CustomEventComponent,
    CustomPropertyComponent,
    ExampleDirective,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
