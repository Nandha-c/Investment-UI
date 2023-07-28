import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchEngineComponent } from './component/search-engine/search-engine.component';
import { SigninComponent } from './component/signin/signin.component';
import { StockInformationComponent } from './component/stock-information/stock-information.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {path: '', redirectTo: 'signin' ,pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'searchEngine', component:SearchEngineComponent},
  {path: 'stockInformation', component:StockInformationComponent},
  {path: 'demo',component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
