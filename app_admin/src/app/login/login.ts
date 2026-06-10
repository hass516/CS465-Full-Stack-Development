import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Authentication } from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {

    this.formError = '';

    if (
      !this.credentials.email ||
      !this.credentials.password ||
      !this.credentials.name
    ) {
      this.formError = 'All fields are required, please try again';
      return;
    }

    this.doLogin();
  }

  private doLogin(): void {

  const newUser: User = {
    name: this.credentials.name,
    email: this.credentials.email
  };

  this.authenticationService
    .login(newUser, this.credentials.password)
    .then(() => {
      this.router.navigate(['']);
    })
    .catch((message) => {
      this.formError = 'Login failed. Please try again.';
      console.log(message);
    });
  }
}