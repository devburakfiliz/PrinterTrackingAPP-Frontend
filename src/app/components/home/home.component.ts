import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    imageUrl = "https://localhost:44354/uploads/images/"
   constructor(){}
   ngOnInit(): void {
     
   }
   getImagePath1(){
    let path = this.imageUrl + "d792a3f6-adbc-463b-9860-f77fa34576e1.png"
    return path;
  }
  getImagePath2(){
    let path = this.imageUrl + "7a76e437-6a79-452e-852b-77ec7c58dc5f.png"
    return path;
  }
  getImagePath3(){
    let path = this.imageUrl + "3d1cf8f9-d751-4fa8-bb34-2ce91b0f3991.png"
    return path;
  }
  getImagePath4(){
    let path = this.imageUrl + "33cc2f3e-8d94-4abb-9f02-72856f4a4a53.png"
    return path;
  }
  getImagePath5(){
    let path = this.imageUrl + "4db523e8-5ab4-4371-b62c-97ef5d1dd199.png"
    return path;
  }
}
