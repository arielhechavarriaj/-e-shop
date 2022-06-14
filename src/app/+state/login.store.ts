import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {User} from "../models/interfaces";

export interface LoginState {
  username: string ;
  token: string ;
  loginError:boolean;
}

export function createInitialState(): LoginState {
  return {
    username: '',
    token: '',
    loginError:false

  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Login' })
export class LoginStore extends Store<LoginState> {
  constructor() {
    super(createInitialState());
  }

  updateUser(user:User) {
    this.update({ username: user.username,token:user.token });
  }
  updateLoginError(err:boolean) {
    this.update({ loginError:err });
  }

}
