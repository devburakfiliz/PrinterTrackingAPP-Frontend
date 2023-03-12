import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Printer } from 'src/app/models/printer';
import { PrinterBrand } from 'src/app/models/printerBrand';
import { PrinterModel } from 'src/app/models/printerModel';
import { PrinterBrandService } from 'src/app/services/printer-brand.service';
import { PrinterModelService } from 'src/app/services/printer-model.service';
import { PrinterService } from 'src/app/services/printer.service';

@Component({
  selector: 'app-printer-add',
  templateUrl: './printer-add.component.html',
  styleUrls: ['./printer-add.component.css']
})
export class PrinterAddComponent {
  printerAddForm:FormGroup;
  models: PrinterModel[] = []
  brands: PrinterBrand[] = []

  constructor(private formBuilder:FormBuilder,
    private printerService:PrinterService,
    private toastrService:ToastrService,
    private printerModelService:PrinterModelService,
    private printerBrandService:PrinterBrandService){}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getPrinterModels();
    this.getPrinterBrands();
  }

  createCarAddForm(){
    this.printerAddForm=this.formBuilder.group({
      serialNumber:["",Validators.required],
      brandId:["",Validators.required],
      modelId:["",Validators.required],
      
    })
  }
  add(){
    if (this.printerAddForm.valid) {
      let printer:Printer = Object.assign({}, this.printerAddForm.value);
        
        this.printerService.add(printer).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı!");
        this.printerAddForm.reset()
      } ,responseError=>{  
        console.log(responseError.error.message)

        if(responseError){

          console.log(responseError)
         
            this.toastrService.error(responseError.error.message
              ,"Doğrulama hatası")
              
        } 
        
      }
      )
    } else {
      this.toastrService.error("Lütfen tüm alanları doldurunuz.", "Hata!")
    }
  }
  getPrinterModels(){
    this.printerModelService.getPrinterModels().subscribe((response)=>{
      this.models=response.data
    })
  }

  getPrinterBrands(){
    this.printerBrandService.getPrinterBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }

}
