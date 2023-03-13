import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Printer } from 'src/app/models/printer';
import { Toner } from 'src/app/models/toner';
import { TonerBrand } from 'src/app/models/tonerBrand';
import { TonerModel } from 'src/app/models/tonerModel';
import { PrinterService } from 'src/app/services/printer.service';
import { TonerBrandService } from 'src/app/services/toner-brand.service';
import { TonerModelService } from 'src/app/services/toner-model.service';
import { TonerTrackingService } from 'src/app/services/toner-tracking.service';
import { TonerService } from 'src/app/services/toner.service';

@Component({
  selector: 'app-toner-tracking-add',
  templateUrl: './toner-tracking-add.component.html',
  styleUrls: ['./toner-tracking-add.component.css']
})
export class TonerTrackingAddComponent implements OnInit {
  
  trackingAddForm:FormGroup;
  brands : TonerBrand [] = [];
  models : TonerModel [] = [];
  toners : Toner []=[];

  constructor(private formBuilder:FormBuilder,
    private tonerTrackingService:TonerTrackingService,
    private tonerBrandService:TonerBrandService,
    private tonerModelService:TonerModelService,
    private tonerService:TonerService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createTrackingAddForm();
    this.getTonerBrands();
    this.getTonerModels();
    this.getToner();
    
  }

  createTrackingAddForm(){
    this.trackingAddForm=this.formBuilder.group({
      tonerId:["",Validators.required],
      brandId:["",Validators.required],
      modelId:["",Validators.required],
      description:["",Validators.required]
         
    })
  }

  add(){
    if (this.trackingAddForm.valid) {
      let printer = Object.assign({}, this.trackingAddForm.value);
      
        this.tonerTrackingService.add(printer).subscribe(response=>{
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

  getToner(){
    this.tonerService.getToner(). subscribe((response)=>{
      this.toners=response.data   })
    }

}
