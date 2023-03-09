import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Toner } from 'src/app/models/toner';
import { TonerService } from 'src/app/services/toner.service';

@Component({
  selector: 'app-toner',
  templateUrl: './toner.component.html',
  styleUrls: ['./toner.component.css']
})
export class TonerComponent implements OnInit {

  toners : Toner[]=[];
  dataLoaded = false ;

  constructor(private tonerService:TonerService,
    private toastrService:ToastrService,
    ){}

  ngOnInit(): void {
    this.getToner();
  }
  getToner(){
    this.tonerService.getToner(). subscribe((response)=>{
      this.toners=response.data
      this.dataLoaded=true;
    })
  }

}
