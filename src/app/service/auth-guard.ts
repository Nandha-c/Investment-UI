// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from 'ngx-auth';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.getAccessToken) {
//       // User is authenticated (logged in), prevent access to login page
//       this.router.navigate(['/dashboard']); // Change '/dashboard' to your desired default page
//       return false;
//     }
//     return true;
//   }
// }