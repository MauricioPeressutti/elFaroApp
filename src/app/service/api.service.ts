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
        return this.http.get(API_ENDPOINT + url)
    }

    post(uri: string, body: any) {
        return this.http.post(API_ENDPOINT + uri, body)
    }

    put(uri: string, body: any) {
        return this.http.put(API_ENDPOINT + uri, body)
    }

    delete(uri: string) {
        return this.http.delete(API_ENDPOINT + uri)
    }
    getWithoutUri(uri: string) {
        return this.http.get(uri)
    }

}