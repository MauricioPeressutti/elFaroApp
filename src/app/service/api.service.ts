import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_ENDPOINT = environment.API_ENDPOINT;

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    get(uri: string) {
        return this.http.get(API_ENDPOINT + uri);
    }

    post(uri: string, body: any) {
        return this.http.post(API_ENDPOINT + uri, body);
    }

    put(uri: string, body: any) {
        return this.http.put(API_ENDPOINT + uri, body);
    }

    delete(uri: string) {
        return this.http.delete(API_ENDPOINT + uri);
    }
    getWithoutUri(uri: string) {
        return this.http.get(uri);
    }

}