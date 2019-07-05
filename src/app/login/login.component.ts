import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variable
  mode: number = 0;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(user) {
    this.authService.login(user)
          .subscribe(response=>{
            let jwtToken = response.headers.get('Authorization');
            //Test
            console.log(jwtToken);
            console.log(response);
            //appel
            this.authService.saveToken(jwtToken);
            //Redirection apres auth
            this.router.navigate(['/tasks']);

          },error=>{
            this.mode=1;
          });
  }
}
