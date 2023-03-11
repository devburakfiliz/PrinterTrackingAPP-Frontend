import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';
import { PrinterAddComponent } from '../printerApp/printer-add/printer-add.component';
import { PrinterComponent } from '../printerApp/printer/printer.component';
import { StorageComponent } from '../storage/storage.component';
import { TonerComponent } from '../tonerApp/toner/toner.component';
import { LayoutComponent } from './layout.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../userApp/user/user.component';
import { UserAddComponent } from '../userApp/user-add/user-add.component';


const routes: Routes = [
  {path:"",component:LayoutComponent, children: [
    {path:"toner",component:TonerComponent,canActivate:[LoginGuard]},
    {path:"storage",component:StorageComponent},
    {path:"printer/add",component:PrinterAddComponent},
    {path:"admin",component:AdminPageComponent},
    {path:"",component:HomeComponent},
    {path:"users",component:UserComponent},
    {path:"users/add",component:UserAddComponent},
    {path:"printer",component:PrinterComponent, canActivate:[LoginGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
