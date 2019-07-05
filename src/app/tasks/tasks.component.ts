import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //NB: Il fo creer le model Task
  tasks ;
  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }


  checkAdmin(){
    this.authService.isAdmin();
  }
  onNewTask(){
    //Redirection
    this.router.navigateByUrl('/new-task');
  }
  getData(){
    this.authService.getTasks().subscribe(data=>{
      this.tasks=data;
    },error=>{
      this.authService.logout();
      this.router.navigateByUrl("/login");
    })
  }
}
