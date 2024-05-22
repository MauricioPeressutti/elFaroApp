import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService, private snackBar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Agregar el token al encabezado de autorización si está disponible
        const token = this.authService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'An error occurred';
                if (error.error instanceof ErrorEvent) {
                    // Error del lado del cliente
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // Error del lado del servidor
                    switch (error.status) {
                        case 400:
                            errorMessage = 'Bad Request';
                            break;
                        case 404:
                            errorMessage = 'Not Found';
                            break;
                        case 409:
                            errorMessage = error.error.message;
                            break;
                        case 500:
                            errorMessage = 'Internal Server Error';
                            break;
                        default:
                            errorMessage = `Error Code: ${error.status}`;
                            break;
                    }
                }
                this.snackBar.open(errorMessage, 'CERRAR', {
                    duration: 3000,
                });
                return throwError(errorMessage);
            })
        );
    }
}
