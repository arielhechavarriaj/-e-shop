import { Injectable } from '@angular/core';
import { LoginStore } from './login.store';
import { User } from '../models/interfaces';
import { LoginQuery } from './login.query';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoginService {
  isLogin$: Observable<string>;
  userName$: Observable<string>;
  constructor(
    private readonly loginQuery: LoginQuery,
    private readonly loginStore: LoginStore
  ) {
    this.isLogin$ = this.loginQuery.selectIsLogin$();
    this.userName$ = this.loginQuery.selectUsername$();
  }

  updateUserlogin(user: User) {
    if (user.username == 'admin' && user.password == 'admin') {
      user['token'] = user.username + Date.now() + user.password; //generando un id unico para ser usado como token, esto es solo simulando
      console.log('token', user.token);
      this.loginStore.updateUser(user);
    } else {
      this.loginStore.updateUser({username:'',password:''});
      this.loginStore.updateLoginError(true);
    }
  }
}
