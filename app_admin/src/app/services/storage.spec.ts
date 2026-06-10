import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToken(token: string): void {
    localStorage.setItem('travlr-token', token);
  }

  public getToken(): string {
    return localStorage.getItem('travlr-token') || '';
  }

  public removeToken(): void {
    localStorage.removeItem('travlr-token');
  }
}