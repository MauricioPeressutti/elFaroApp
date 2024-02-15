import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: ApiService,
        private router: Router
    ) { }

    login(user: any) {
        return this.http.post('/token/login', user);
    }


    logout() {
        localStorage.clear();
        this.router.navigate(['']);
    }

    isTokenExpired() {
        let tokenExpired = true;
        const token = localStorage.getItem('currentToken') ? localStorage.getItem('currentToken') : null;
        // check if token is expired
        if (token) {
            const jwtToken = JSON.parse(atob(token.split('.')[1]));
            tokenExpired = Date.now() > (jwtToken.exp * 1000);
        }
        return tokenExpired;
    }

}