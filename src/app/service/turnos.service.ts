import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { turnoDto } from '../model/turnoDto';


@Injectable({
    providedIn: 'root'
})
export class TurnosService {

    constructor(
        private http: ApiService,
    ) { }

    getAllActiveTurnos() {
        return this.http.get('/secure/turno/active');
    }
    closeTurno(dto: turnoDto) {
        return this.http.put('/secure/turno/update', dto);
    }
}