import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLoggedIn = false

  constructor(){}

  ngOnInit(): void {
    this.getIfAuthenticated()
  }

  getIfAuthenticated(){
    if(localStorage.getItem("token") != null){
      this.isLoggedIn = true
    }
  }
}
