import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { RegisterComponent } from './register/register.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { AuthenticationService } from '../services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    RegisterComponent,
    NewTaskComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule, 
      FormsModule, 
      HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
