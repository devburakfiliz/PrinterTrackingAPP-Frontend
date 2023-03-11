import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  imageUrl = "https://localhost:44354/uploads/images/"
  constructor(){}
  ngOnInit(): void {
    
  }
  getImagePath(){
    let path = this.imageUrl + "4825f327-0d9e-43b6-84af-ecc334243838.png"
    return path;
  }

}
