import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Injectable()
export class AuthenticationService {

  private authToken: string | null = null;

  constructor(
    private router: Router,
  ) { }

  setToken(token: string) {
    this.authToken = token;
    // Opcionalmente, puedes guardar el token en el almacenamiento local del navegador
    localStorage.setItem('currentToken', token);
  }

  getToken(): string | null {
    this.authToken = localStorage.getItem('currentToken');
    return this.authToken;
  }

  clearToken() {
    this.authToken = null;
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('currentToken');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
