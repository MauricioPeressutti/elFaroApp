import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/model/userDto';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorService } from 'src/app/service/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserDto = {};

  constructor(
    private router: Router,
    private loginS: LoginService,
    private errorService: ErrorService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginS.login(this.user).subscribe((response: any) => {
      if (response) {
        debugger
        let person = response.person;
        localStorage.setItem('currentToken', response.authToken.token)
        localStorage.setItem('refreshToken', response.refreshToken.token)
        localStorage.setItem('user', JSON.stringify(person))
        this.router.navigate(['layout/home']);
      }
    }, (error: any) => {
      debugger
      //this.errorService.sendError(error);
    })
  }
}
