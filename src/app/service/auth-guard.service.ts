import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Simulate login functionality
  login() {
    this.isAuthenticated = true;
  }

  // Simulate logout functionality
  logout() {
    this.isAuthenticated = false;
  }

  // Check if user is authenticated
  issAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
