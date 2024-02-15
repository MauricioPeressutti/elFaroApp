import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Injectable()
export class AuthenticationService {
  nativeWindow: any;

  constructor() { }

  login(username: string, password: string) {

  }

  getToken(procedureTypeId: number, username: string, password: string) {

  }

  logout() {

  }
}
