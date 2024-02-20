import { Component, OnInit } from '@angular/core';
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
    private userService: UserService
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
      next: (response) => {
        debugger
        if (response) {
          debugger
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
