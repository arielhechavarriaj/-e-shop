import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../+state/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(   private router: Router,   private loginService: LoginService,) { }

  ngOnInit(): void {
  }

  onLogout() {
this.loginService.updateUserlogin({username:'',token:'',password:''});
    this.router.navigate(['/']);
  }
}
