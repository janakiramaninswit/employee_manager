import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private service: AuthenticateService,
    private router: Router) {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    let userName = this.loginForm.value.userName;
    let password = this.loginForm.value.password;

    this.service.executeAuthenticationService(userName, password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl("/home");
      },
      (error) => { alert("Login Failed!") }
    );
  }
}
