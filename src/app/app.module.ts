import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { BrandComponent } from './brand/brand.component';
import { CarComponent } from './car/car.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorComponent } from './color/color.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CarDetailComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
