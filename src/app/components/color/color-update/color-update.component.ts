import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
})
export class ColorUpdateComponent implements OnInit {
  color: Color;
  colorUpdateForm: FormGroup;
  constructor(
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.getColorById(param["colorId"])
    })
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      id: [this.color.id, Validators.required],
      name: ['', Validators.required],
    });
  }

  getColorById(id: number) {
    this.colorService.getColorById(id).subscribe((response) => {
      this.color = response.data;
      this.createColorUpdateForm();
    });
  }

  update(){
    let color:Color=Object.assign({},this.colorUpdateForm.value)
    this.colorService.update(color).subscribe(response=>{
      this.toastrService.success("Güncelleme başarılı")
    })
  }
}
