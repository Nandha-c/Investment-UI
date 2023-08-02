import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, mapTo, of, tap } from 'rxjs';
import { base_url } from '../environment/environment.service';
import { URLConstants } from '../app-constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly token = 'token';

  constructor(private Http: HttpClient, private router : Router) { }

  signin(user:{ mailId: string, Password: string}) : Observable<Boolean>{
    const url = `${base_url}Login/Authenticate`;
    return this.Http.post<any>(url,user)
    .pipe(
      tap(token => this.doUserSignin(token)),
      mapTo(true),
      catchError((err: Response) => {
        return of(false);
      })
    );
  }

  doUserSignin(token: any)
  {
    var newToken = token.token;
    localStorage.setItem(this.token, JSON.stringify(newToken));
  }

  getJwtToken(): string | null {
    return localStorage.getItem(this.token);
  }

  logout(){
    localStorage.removeItem(this.token);
    this.router.navigate(['/signin']);
  }
}
