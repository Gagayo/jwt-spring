import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';

const appRoute: Routes = [
    {path:"login", component: LoginComponent},
    {path:"tasks", component: TasksComponent},
    {path:"new-task", component: NewTaskComponent},
    {path:"register", component: RegisterComponent},
    {path:"", redirectTo:"/login", pathMatch:"full"}
    
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}