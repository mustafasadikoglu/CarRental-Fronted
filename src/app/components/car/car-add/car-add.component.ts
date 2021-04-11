import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private carService:CarService,private tostrService:ToastrService) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      carName:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
    });
  }
  add(){
    if(this.carAddForm.valid){
      let carModel= Object.assign({},this.carAddForm.value) 
      this.carService.add(carModel).subscribe(response=>{                
        this.tostrService.success("Araç Eklendi","Başarılı")
      });
      
    }else{
      this.tostrService.error("Formunuz Eksik","Dikkat")
    }
   
   
   
  }
}
