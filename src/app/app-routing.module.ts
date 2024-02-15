import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutWithoutLoggingInComponentComponent } from './pages/layout-without-logging-in-component/layout-without-logging-in-component.component';
import { LayoutComponentComponent } from './pages/layout-component/layout-component.component';
import { LoginComponent } from './pages/login/login.component';

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
      //  {
      //     path: 'home',
      //     component: HomeComponent,
      //     canActivate: [AuthGuard]
      //  }
    ]
  },
  // En AppRoutingModule
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'init/login'  // Redirige directamente al componente de inicio de sesión
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
