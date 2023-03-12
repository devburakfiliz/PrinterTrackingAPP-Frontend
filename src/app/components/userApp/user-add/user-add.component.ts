import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  registerForm:FormGroup;


  imageUrl = "https://localhost:44354/uploads/images/"

  constructor(private formBuilder:FormBuilder,
    private registerService:RegisterService,
    private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createRegisterForm();
  }
  getImagePath(){
    let path = this.imageUrl + "4825f327-0d9e-43b6-84af-ecc334243838.png"
    return path;
  }
  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      email:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      password:["",Validators.required]
    })
  }
  register(){
    if (this.registerForm.valid) {
      let register:Register=Object.assign({},this.registerForm.value);
      this.registerService.register(register).subscribe(response=>{
          this.toastrService.success(response.message,"Kayıt Başarılı")
      },responseError=>{
        console.log(responseError.error.message)
        
        if (responseError) {
          this.toastrService.error(responseError.error.message
            ,"Doğrulama hatası")
        }
      })

    }else {
      this.toastrService.error("Lütfen tüm alanları doldurunuz.", "Hata!")
    }
  }

}
