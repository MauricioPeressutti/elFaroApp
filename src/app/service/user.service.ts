import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { turnoDto } from '../model/turnoDto';
import { UserDto } from '../model/userDto';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: ApiService,
    ) { }


    createTurno(dto: UserDto) {
        return this.http.post('/secure/user/create', dto);
    }

}