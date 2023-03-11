import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  imageUrl = "https://localhost:44354/uploads/images/"
  loginForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:LoginService,
    private toastrService:ToastrService,
    private router: Router){}
    ngOnInit(): void {
      this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      let loginModel = Object.assign({},this.loginForm.value)
      //let email = this.loginForm.controls['email'].value
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        this.router.navigateByUrl("/")
      },reportError=>{
        this.toastrService.error(reportError.error,"HATA!")
      })
    }
  }
  getImagePath(){
    let path = this.imageUrl + "4825f327-0d9e-43b6-84af-ecc334243838.png"
    return path;
  }
}
