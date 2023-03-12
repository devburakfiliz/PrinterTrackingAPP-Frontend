import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TonerBrand } from 'src/app/models/tonerBrand';
import { TonerModel } from 'src/app/models/tonerModel';
import { PrinterService } from 'src/app/services/printer.service';
import { TonerBrandService } from 'src/app/services/toner-brand.service';
import { TonerModelService } from 'src/app/services/toner-model.service';
import { TonerService } from 'src/app/services/toner.service';

@Component({
  selector: 'app-toner-add',
  templateUrl: './toner-add.component.html',
  styleUrls: ['./toner-add.component.css']
})
export class TonerAddComponent {
  brands : TonerBrand [] = [];
  models : TonerModel [] = [];
  tonerAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private tonerService:TonerService,
    private tonerBrandService:TonerBrandService,
    private tonerModelService:TonerModelService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createTonerAddForm();
    this.getTonerBrands();
    this.getTonerModels();
  }

  createTonerAddForm(){
    this.tonerAddForm=this.formBuilder.group({
      serialNumber:["",Validators.required],
      brandId:["",Validators.required],
      modelId:["",Validators.required],
     
      
    })
  }
  add(){
    if (this.tonerAddForm.valid) {
      let printer = Object.assign({}, this.tonerAddForm.value);
      
        this.tonerService.add(printer).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı!");
        
      } ,responseError=>{  
        console.log(responseError.error.message)

        if(responseError){
         
            this.toastrService.error(responseError.error.message
              ,"Doğrulama hatası")
              
        } 
        
      }
      )
    } else {
      this.toastrService.error("Lütfen tüm alanları doldurunuz.", "Hata!")
    }
  }
  getTonerBrands(){
    this.tonerBrandService.getTonerBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }

  getTonerModels(){
    this.tonerModelService.getTonerBrands().subscribe((response)=>{
      this.models=response.data
    })
  }




}
