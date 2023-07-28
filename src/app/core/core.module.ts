import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeBannerComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    HomeComponent
  ]
})
export class CoreModule { }
