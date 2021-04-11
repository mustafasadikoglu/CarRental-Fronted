import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarfilterComponent } from './components/carfilter/carfilter.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CarAddComponent } from './components/car-add/car-add.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarRentComponent } from './components/car/car-rent/car-rent.component';
import { CardComponent } from './components/card/card.component';
import { CardSavedComponent } from './components/card/card-saved/card-saved.component';
import { CarlistComponent } from './components/car/carlist/carlist.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CarDetailComponent,
    FilterPipePipe,
    CarfilterComponent,
    LoginComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    RegisterComponent,
    ProfileComponent,
    RentalComponent,
    CarRentComponent,
    CardComponent,
    CardSavedComponent,
    CarlistComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    BrandListComponent,
    ColorListComponent,
    ColorUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
