import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { turnoDto } from '../model/turnoDto';
import { habitacionDto } from '../model/habitacionDto';
import { Observable, map } from 'rxjs';
import { MercaderiaDto } from '../model/MercaderiaDto';


@Injectable({
    providedIn: 'root'
})
export class MercaderiaService {

    constructor(
        private http: ApiService,
    ) { }

    getForAproximation(name: string): Observable<MercaderiaDto[]> {
        return this.http.get('/secure/mercaderia/names?search=' + name).pipe(
            map((response: any[]) => this.mapResponseToDTO(response))
        );
    }

    getAllMercaderia(): Observable<MercaderiaDto[]> {
        return this.http.get('/secure/mercaderia/all').pipe(
            map((response: any[]) => this.mapResponseToDTO(response))
        );
    }

    updateMercaderia(obj: MercaderiaDto) {
        return this.http.put('/secure/mercaderia/update', obj);
    }
    createMercaderia(obj: MercaderiaDto) {
        return this.http.post('/secure/mercaderia/create', obj);
    }

    addMercaderia(obj: turnoDto) {
        return this.http.post('/secure/mercaderia/add', obj);
    }

    private mapResponseToDTO(response: any[]): MercaderiaDto[] {
        return response.map(item => {
            const mercaderiaDTO: MercaderiaDto = {
                nombre: item.nombre,
                cantidad: item.cantidad,
                precio: item.precio,
                id: item.id
            };
            return mercaderiaDTO;
        });
    }
}