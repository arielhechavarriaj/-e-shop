import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,  FormControl } from '@angular/forms';
import {AuthService} from "../auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errors: any = [];
  notify: string | undefined;
  error=false;
  messageError='';

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.route.queryParams.subscribe((params) => {
      const key1 = 'registered';
      const key2 = 'loggedOut';
      if (params[key1] === 'success') {
        this.notify = 'You have been successfully registered. Please Log in';
      }
      if (params[key2] === 'success') {
        this.notify = 'You have been loggedout successfully';
      }
    });
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  isValidInput(fieldName: string | number): boolean {

   if( this.loginForm)

     return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
   else return false;
  }

  login(): void {

    this.auth.login(this.loginForm.value).subscribe((value: boolean) => {
      if (value) {
        this.router.navigate(['/']);
      } else {
   this.error=true;
   this.messageError='Upss password or username incorrect.'
      }
    }
  );
  }

}
