import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'ngx-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token =localStorage.getItem('token');
    if (token == null) {
      this.router.navigate(['/searchEngine']);
      return false;
    }
    else{
        return true;
    }
    
  }
}