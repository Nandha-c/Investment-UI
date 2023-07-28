import { Component } from '@angular/core';
import { globalConstant } from './app-constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `${globalConstant.appTitle}`;  
}
