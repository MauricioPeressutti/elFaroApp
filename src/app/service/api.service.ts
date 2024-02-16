import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_ENDPOINT = environment.API_ENDPOINT;

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    get(url: string): Observable<any> {
        return this.http.get(API_ENDPOINT + url).pipe(
            catchError(this.handleError)
        );
    }

    post(uri: string, body: any) {
        return this.http.post(API_ENDPOINT + uri, body).pipe(
            catchError(this.handleError));
    }

    put(uri: string, body: any) {
        return this.http.put(API_ENDPOINT + uri, body).pipe(
            catchError(this.handleError));
    }

    delete(uri: string) {
        return this.http.delete(API_ENDPOINT + uri).pipe(
            catchError(this.handleError));
    }
    getWithoutUri(uri: string) {
        return this.http.get(uri).pipe(
            catchError(this.handleError));
    }


    private handleError(error: HttpErrorResponse) {
        console.error('ApiService error:', error);
        let errorMessage = 'Error al procesar la solicitud. Por favor, inténtelo de nuevo más tarde.';
        if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Error del lado del servidor
            errorMessage = `Error: ${error.message}`;
        }
        // Devuelve un observable con el mensaje de error
        return of(errorMessage);
    }
}