import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-stock-information',
  templateUrl: './stock-information.component.html',
  styleUrls: ['./stock-information.component.scss']
})
export class StockInformationComponent {
  stockData: any;
  Id:any;

  
  constructor(private router : Router , private stockService:StockService) {}

  ngOnInit(): void{
    this.Id='B76FB45F-71B3-4FB6-BA4F-38E881ED1D3C';
    this.getStockById(this.Id);
  }
  onBack() {
    this.router.navigate(['/searchEngine']);
  }

  getStockById(stockId: string) {

    this.stockService.getStockById(stockId).subscribe(
      (data:any) => {
        this.stockData = data;
        console.log(this.stockData);
       }
    );
      
    
  }
}
