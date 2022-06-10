// auth.service.ts

import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: String = 'https://dummyjson.com/';

  constructor() {
  }


  login(params: any): Observable<boolean> {
    return of(params.username == 'admin' && params.password == 'admin');
  }


}
