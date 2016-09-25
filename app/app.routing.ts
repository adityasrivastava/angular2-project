import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './app.home.component'; 
import {LoginComponent} from './app.login.component';
import {SuccessComponent} from './app.success.component'; 
import {ErrorComponent} from './app.error.component'; 

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
  	path: '',
  	redirectTo: '/home',
  	pathMatch: 'full'
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);