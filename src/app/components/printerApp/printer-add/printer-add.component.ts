import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Printer } from 'src/app/models/printer';
import { PrinterService } from 'src/app/services/printer.service';

@Component({
  selector: 'app-printer-add',
  templateUrl: './printer-add.component.html',
  styleUrls: ['./printer-add.component.css']
})
export class PrinterAddComponent {
  printerAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private printerService:PrinterService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
    
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

}
