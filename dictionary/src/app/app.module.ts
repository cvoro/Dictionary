import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login-component';

import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
