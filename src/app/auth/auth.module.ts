import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from "./auth.guard";
import {RouterModule, Routes} from "@angular/router";
import { AuthComponent } from './container/auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.modules";
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [ AuthGuard]
})
export class AuthModule { }
