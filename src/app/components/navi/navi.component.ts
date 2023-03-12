import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLoggedIn = false
  isAdmin = false
  claims: string[] = []
  users : User[]=[];


  constructor(private router: Router, private loginService: LoginService,
    private userService:UserService){}

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
  getUsers(){
    this.userService.getUsers().subscribe((response)=>{
      this.users=response.data
      
    })
  }
}
