import { Component, OnInit } from '@angular/core';
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


  constructor(private tonerTrackingService:TonerTrackingService,
    private loginService:LoginService

    ){}

  ngOnInit(): void {
    this.getTonerTracking();
    this.getIfAdmin()

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
