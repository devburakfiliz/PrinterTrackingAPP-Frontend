import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Toner } from 'src/app/models/toner';
import { LoginService } from 'src/app/services/login.service';
import { TonerService } from 'src/app/services/toner.service';

@Component({
  selector: 'app-toner',
  templateUrl: './toner.component.html',
  styleUrls: ['./toner.component.css']
})
export class TonerComponent implements OnInit {

  toners : Toner[]=[];
  dataLoaded = false ;
  currentToner:Toner | null;
  filterText:""
  claims: string[] = []


  constructor(private tonerService:TonerService,
    private toastrService:ToastrService,
    private loginService:LoginService
    ){}

  ngOnInit(): void {
    this.getToner();
    this.getIfAdmin();
  }
  getToner(){
    this.tonerService.getToner(). subscribe((response)=>{
      this.toners=response.data
      this.dataLoaded=true;
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
