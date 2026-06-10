import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { StorageService } from './storage';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public saveToken(token: string): void {
    this.storageService.saveToken(token);
  }

  public getToken(): string {
    return this.storageService.getToken();
  }

  public logout(): void {
    this.storageService.removeToken();
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== '';
  }

  public async login(user: User, password: string): Promise<void> {

    const authData = {
      email: user.email,
      password: password
    };

    const result = await firstValueFrom(
      this.http.post<AuthResponse>(
        `${this.apiBaseUrl}/login`,
        authData
      )
    );

    this.saveToken(result.token);
  }
}