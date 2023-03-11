import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinterAddComponent } from '../printerApp/printer-add/printer-add.component';
import { TonerAddComponent } from '../tonerApp/toner-add/toner-add.component';
import { UserAddComponent } from '../userApp/user-add/user-add.component';
import { UserComponent } from '../userApp/user/user.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {path:"", component:AdminLayoutComponent, children: [
    {path:"user/add", component:UserAddComponent},
    {path:"printer/add", component:PrinterAddComponent},
    {path:"toner/add", component:TonerAddComponent},
    {path:"users", component:UserComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
