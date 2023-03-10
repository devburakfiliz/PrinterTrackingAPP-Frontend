import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLoggedIn = false
  isAdmin = false
  claims: string[] = []
  constructor(private router: Router, private loginService: LoginService){}

  ngOnInit(): void {
    this.getIfAuthenticated()
    this.getIfAdmin()
  }

  getIfAuthenticated(){
    if(localStorage.getItem("token") != null){
      this.isLoggedIn = true
    }
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
    let a = []
  }

  getIfAdmin(){
    this.loginService.getClaims().subscribe({
      next: (response) => {
        this.claims = response
      }
    })
  }
}
