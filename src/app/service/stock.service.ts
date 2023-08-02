import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { base_url } from '../environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private Http: HttpClient) { }

  
  getStockById(stockId:string) : Observable<any>{
    return this.Http.get(`${base_url}StockDetails/` + stockId);
  }
}
