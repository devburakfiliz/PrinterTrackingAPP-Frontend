import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TonerTracking } from 'src/app/models/tonerTracking';
import { LoginService } from 'src/app/services/login.service';
import { TonerTrackingService } from 'src/app/services/toner-tracking.service';

@Component({
  selector: 'app-toner-tracking',
  templateUrl: './toner-tracking.component.html',
  styleUrls: ['./toner-tracking.component.css']
})
export class TonerTrackingComponent implements OnInit{
  tonerTrackings: TonerTracking[]=[];
  dataLoaded=false;
  filterText:""
  claims: string[] = []
  trackingDeleteForm:FormGroup;




  constructor(private tonerTrackingService:TonerTrackingService,
    private loginService:LoginService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService

    ){}

  ngOnInit(): void {


    this.getTonerTracking();
    this.getIfAdmin()

  }

 
  deleted(id: number){
      /* this.tonerTrackingService.deleted(id).subscribe(response=>{
        this.toastrService.info(response.message)
      },reportError=>{
        this.toastrService.error(reportError.error.message,"HATA!")
      }) */
      
      this.tonerTrackingService.deleted(id).subscribe({
        next: (response) => {
          this.toastrService.info(response.message)
          this.getTonerTracking()
        },
        error: (err) => {
          this.toastrService.error(err.error.message,"HATA!")
        }
      })
  }



  getTonerTracking(){
    this.tonerTrackingService.getTonerTracking().subscribe((response)=>{
      this.tonerTrackings=response.data
    })
  }
  getIfAdmin(){
    this.loginService.getClaims().subscribe({
      next: (response) => {
        this.claims = response
      }
    })
  }

}
