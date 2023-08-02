import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchEngineComponent } from './component/search-engine/search-engine.component';
import { SigninComponent } from './component/signin/signin.component';
import { StockInformationComponent } from './component/stock-information/stock-information.component';
import { DemoComponent } from './demo/demo.component';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StockService } from './service/stock.service';
import { AuthService } from './service/auth.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchEngineComponent,
    SigninComponent,
    StockInformationComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutoCompleteModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [StockService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
