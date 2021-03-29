import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/_components/header/header.component';
import { SideMenuComponent } from './core/_components/side-menu/side-menu.component';
import { FooterComponent } from './core/_components/footer/footer.component';
import { NotFoundComponent } from './core/_components/not-found/not-found.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MessageService } from "primeng/api";
import {ToastModule} from 'primeng/toast';
import { DashboardComponent } from './core/_components/dashboard/dashboard.component';
 
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    NotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

  ],
  providers: [HttpClient ,MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
