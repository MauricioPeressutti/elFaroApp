import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/model/userDto';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginS.login(this.user).subscribe((response: any) => {
      if (response) {
        let person = response.person;
        localStorage.setItem('currentToken', response.authToken.token)
        localStorage.setItem('refreshToken', response.refreshToken.token)
        localStorage.setItem('user', JSON.stringify(person))
        this.router.navigate(['layout/home']);
      }
    }, (error: any) => {
      if (error.status == 400) {
        this._snackBar.open(error.error.msg ? error.error.msg : 'Error al logear', 'Cerrar')
      } else {
        this._snackBar.open('Error', 'ok')
      }
    })
  }
}
