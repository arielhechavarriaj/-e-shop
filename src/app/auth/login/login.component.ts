import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {LoginService} from "../../+state/login.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit,OnDestroy {
  loginForm!: FormGroup;
  errors: any = [];
  notify: string | undefined;
  error = false;
  messageError = '';
  subs!: Subscription;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.initForm();

    this.subs=this.loginService.userName$.subscribe(value=>{
      if(value!=''){
        this.router.navigate(['/']);
      }
    })

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
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.loginService.updateUserlogin(this.loginForm.value);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
