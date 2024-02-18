import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutWithoutLoggingInComponentComponent } from './pages/layout-without-logging-in-component/layout-without-logging-in-component.component';
import { LayoutComponentComponent } from './pages/layout-component/layout-component.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/secure/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuard } from './service/util/auth.guard';
import { AuthenticationService } from './service/util/authentication.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateTurnoDialogComponent } from './pages/secure/dialog/create-turno-dialog/create-turno-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MercaderiaComponentComponent } from './pages/secure/mercaderia-component/mercaderia-component.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AddMercaderiaDialogComponent } from './pages/secure/dialog/add-mercaderia-dialog/add-mercaderia-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    LayoutWithoutLoggingInComponentComponent,
    LayoutComponentComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CreateTurnoDialogComponent,
    MercaderiaComponentComponent,
    AddMercaderiaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSlideToggleModule

  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
