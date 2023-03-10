import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  constructor(private router:Router,
    ){}

  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
    let a = []
  }
}
