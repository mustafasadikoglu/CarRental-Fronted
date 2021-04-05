import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/detail/:carId', component: CarDetailComponent },
  { path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars/add', component: CarAddComponent, canActivate: [LoginGuard] },
  { path: 'brands/add', component: BrandAddComponent, canActivate: [LoginGuard] },
  { path: 'colors/add', component: ColorAddComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'rentals', component: RentalComponent },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
