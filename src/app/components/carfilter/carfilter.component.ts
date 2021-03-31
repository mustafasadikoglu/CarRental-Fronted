import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../../models/brand';
import { Color } from '../../models/color';
import { Filters } from '../../models/filters';
import { BrandService } from '../../services/brand.service';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-carfilter',
  templateUrl: './carfilter.component.html',
  styleUrls: ['./carfilter.component.css']
})
export class CarfilterComponent implements OnInit {

  colors:Color[];
  brands:Brand[];
  currentBrand : Brand;
  allBrand?: Brand;
  currentColor : Color | null;
  allColor?: Color;
  Filters = {};

  constructor(private colorService:ColorService,private brandService:BrandService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.setRoute();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }
  setCurrentBrand(){
    this.currentBrand !== undefined
      ? (Filters.brandId = this.currentBrand.id)
      : (Filters.brandId = undefined);
  } 
  
  allBrandSelected(){
    return this.currentBrand == undefined ? true : false;
  } 

  setCurrentColor() {
    this.currentColor !== undefined
      ? (Filters.colorId = this.currentColor?.id)
      : (Filters.colorId = undefined);
  }
  allColorsSelected() {
    return this.currentColor == undefined ? true : false;
  }


  setRoute() {
    if (Filters['brandId'] && Filters['colorId']) {
      this.router.navigate([
        `cars/brand/${Filters.brandId}/color/${Filters.colorId}`,
      ]);
    } else if (Filters['brandId']) {
      this.router.navigate([`cars/brand/${Filters.brandId}`]);
    } else if (Filters['colorId']) {
      this.router.navigate([`cars/color/${Filters.colorId}`]);
    } else {
      this.router.navigate([`cars/`]);
    }
  }
}
