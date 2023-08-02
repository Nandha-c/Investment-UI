import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchEngineComponent } from './component/search-engine/search-engine.component';
import { SigninComponent } from './component/signin/signin.component';
import { StockInformationComponent } from './component/stock-information/stock-information.component';
import { DemoComponent } from './demo/demo.component';
import { AuthGuard } from './service/auth-guard';

const routes: Routes = [
  {path: '', redirectTo: 'signin' ,pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'searchEngine', component:SearchEngineComponent,canActivate: [AuthGuard]},
  {path: 'stockInformation', component:StockInformationComponent, canActivate: [AuthGuard]},
  {path: 'demo',component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
