import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm: FormGroup;
  brand: Brand;
  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
       this.getBrandById(param["brandId"]);
    })
   
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      id: [this.brand.id, Validators.required],
      name: ["", Validators.required],
    });
  }

  update() {
    let brand: Brand = Object.assign({}, this.brandUpdateForm.value);
    console.log(brand);

   if (this.brandUpdateForm.valid) {
     this.brandService.update(brand).subscribe(response=>{
       this.toastrService.success("Güncelleme başarılı")
     })
   }
  }

  getBrandById(brandId: number) {
    this.brandService.getBrandById(brandId).subscribe((response) => {
      this.brand = response.data;    
      this.createBrandUpdateForm();        
    });
  }
}
