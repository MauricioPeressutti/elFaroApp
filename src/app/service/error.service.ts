import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_ENDPOINT = environment.API_ENDPOINT;

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    constructor(
        private _snackBar: MatSnackBar
    ) { }

    sendError(error: any) {

        return null;
    }

}