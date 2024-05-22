import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutWithoutLoggingInComponentComponent } from './pages/layout-without-logging-in-component/layout-without-logging-in-component.component';
import { LayoutComponentComponent } from './pages/layout-component/layout-component.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/secure/home/home.component';
import { AuthGuard } from './service/util/auth.guard';
import { MercaderiaComponentComponent } from './pages/secure/mercaderia-component/mercaderia-component.component';
import { UserGestionComponent } from './pages/secure/user-gestion/user-gestion.component';
import { TurnGestionComponent } from './pages/secure/turn-gestion/turn-gestion.component';

const routes: Routes = [
  // En NotAuthRoutingModule
  {
    path: 'init',
    component: LayoutWithoutLoggingInComponentComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },

  // En LayoutRoutingModule
  {
    path: 'layout',
    component: LayoutComponentComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'mercaderia',
        component: MercaderiaComponentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'userGestion',
        component: UserGestionComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'turnGestion',
        component: TurnGestionComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'init/login'  // Redirige directamente al componente de inicio de sesión
  },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
