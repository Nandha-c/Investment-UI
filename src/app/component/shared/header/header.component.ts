import { Component } from '@angular/core';
import { headerConstant} from 'src/app/app-constants';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private auth : AuthService) {}
  ngOnInit(): void {
    
  }
  onLogout(){
    this.auth.logout();
  }
}
