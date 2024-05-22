import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/model/userDto';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-gestion',
  templateUrl: './user-gestion.component.html',
  styleUrls: ['./user-gestion.component.scss']
})
export class UserGestionComponent implements OnInit {
  nombre: any;
  apellido: any;
  documento: any;
  email: any;
  contra: any;
  repContra: any;
  isOwner: boolean = false;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  createUser() {
    let userDto: UserDto = {
      username: this.documento,
      docNumber: this.documento,
      firstName: this.nombre,
      lastName: this.apellido,
      isOwner: this.isOwner,
      email: this.email,
      password: this.contra,
    }
    this.userService.createTurno(userDto).subscribe({
      next: (response: any) => {
        if (response) {
          this.snackBar.open('Usuario ' + response?.username + ' Creado con exito', 'CERRAR', {
            duration: 3000,
          });
          this.router.navigate(['layout/home']);
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
