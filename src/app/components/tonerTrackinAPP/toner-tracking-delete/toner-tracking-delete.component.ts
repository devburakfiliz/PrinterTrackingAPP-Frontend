import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Toner } from 'src/app/models/toner';
import { TonerBrand } from 'src/app/models/tonerBrand';
import { TonerModel } from 'src/app/models/tonerModel';
import { TonerTracking } from 'src/app/models/tonerTracking';
import { TonerBrandService } from 'src/app/services/toner-brand.service';
import { TonerModelService } from 'src/app/services/toner-model.service';
import { TonerTrackingService } from 'src/app/services/toner-tracking.service';
import { TonerService } from 'src/app/services/toner.service';

@Component({
  selector: 'app-toner-tracking-delete',
  templateUrl: './toner-tracking-delete.component.html',
  styleUrls: ['./toner-tracking-delete.component.css']
})
export class TonerTrackingDeleteComponent implements OnInit {
  trackingDeleteForm:FormGroup;
  brands : TonerBrand [] = [];
  trakings :TonerTracking [] = [];
  models : TonerModel [] = [];
  toners : Toner []=[];

  constructor(private formBuilder:FormBuilder,
    private tonerTrackingService:TonerTrackingService,
    private tonerBrandService:TonerBrandService,
    private tonerModelService:TonerModelService,
    private tonerService:TonerService,
    private toastrService:ToastrService){ 
  }

  ngOnInit(): void {
    this.createTrackingDeleteForm();
    this.getTonerBrands();
    this.getTonerModels();
    this.getToner();
    this.getTonerTracking();
  }
  createTrackingDeleteForm(){
    this.trackingDeleteForm=this.formBuilder.group({
      id:["",Validators.required],
      tonerId:["",Validators.required],
      brandId:["",Validators.required],
      modelId:["",Validators.required],
      description:["",Validators.required]
         
    })
    }

    remove(){
      if (this.trackingDeleteForm.valid) {
        let printer = Object.assign({}, this.trackingDeleteForm.value);
        
          this.tonerTrackingService.remove(printer).subscribe(response=>{
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
  
    getTonerTracking(){
      this.tonerTrackingService.getTonerTracking().subscribe((response)=>{
        this.trakings=response.data
      })
    }
  

}
