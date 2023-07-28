import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { headerConstant} from 'src/app/app-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logout: string ="";
  constructor(private router : Router) {}
  ngOnInit(): void {
    this.logout = headerConstant.logout;
  }
  onLogout() {
    this.router.navigate(['/signin']);
  }
}
