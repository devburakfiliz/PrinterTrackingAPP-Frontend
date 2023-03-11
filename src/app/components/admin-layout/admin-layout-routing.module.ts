import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from '../userApp/user-add/user-add.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {path:"", component:AdminLayoutComponent, children: [
    {path:"user/add", component:UserAddComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
