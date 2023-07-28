import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-information',
  templateUrl: './stock-information.component.html',
  styleUrls: ['./stock-information.component.scss']
})
export class StockInformationComponent {
  
  constructor(private router : Router) {}

  onBack() {
    this.router.navigate(['/searchEngine']);
  }
}
