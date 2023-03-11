import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageUrl = "https://localhost:44354/uploads/images/"


  passwordForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private authService:LoginService,
    private toastrService:ToastrService,
    private router:Router,
    private userService:UserService){}

  ngOnInit(): void {
    this.createPasswordForm();
  }

  createPasswordForm(){
    this.passwordForm=this.formBuilder.group({
      oldPassword:["",Validators.required],
      newPassword:["",Validators.required]
    })
  }


  changePassword(){
    if(this.passwordForm.valid){
      let oldPassword = this.passwordForm.controls['oldPassword'].value
      let newPassword = this.passwordForm.controls['newPassword'].value
      this.userService.changePassword(oldPassword,newPassword).subscribe(response=>{
        this.toastrService.info(response.message)
        

      },reportError=>{
        this.toastrService.error(reportError.error.message,"HATA!")
      })
    }
  }
  getImagePath(){
    let path = this.imageUrl + "4825f327-0d9e-43b6-84af-ecc334243838.png"
    return path;
  }

}
