import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { turnoDto } from '../model/turnoDto';
import { habitacionDto } from '../model/habitacionDto';
import { Observable, map } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HabitacionService {

    constructor(
        private http: ApiService,
    ) { }

    getAllActiveHabitacionService(): Observable<habitacionDto[]> {
        return this.http.get('/secure/habitacion/active').pipe(
            map((response: any[]) => this.mapResponseToDTO(response))
        );
    }

    private mapResponseToDTO(response: any[]): habitacionDto[] {
        return response.map(item => {
            const habitacionDTO: habitacionDto = {
                // Asigna las propiedades del DTO según lo que recibas de la respuesta
                // Ejemplo:
                id: item.id,
                nombre: item.nombre,
                precio: item.precio
            };
            return habitacionDTO;
        });
    }
}