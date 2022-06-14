import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LoginState, LoginStore} from './login.store';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoginQuery extends Query<LoginState> {

  constructor( store: LoginStore) {
    super(store);
  }

  selectIsLogin$ = (): Observable<string> => {
    return this.select((state) => state.token);
  };
  selectUsername$ = (): Observable<string> => {
    return this.select((state) => state.username);
  };


}
