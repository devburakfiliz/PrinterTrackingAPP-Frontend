import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';
import { PrinterAddComponent } from '../printerApp/printer-add/printer-add.component';
import { PrinterComponent } from '../printerApp/printer/printer.component';
import { StorageComponent } from '../storage/storage.component';
import { TonerComponent } from '../tonerApp/toner/toner.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../userApp/user/user.component';
import { TonerAddComponent } from '../tonerApp/toner-add/toner-add.component';
import { ProfileComponent } from '../profile/profile.component';
import { TonerTrackingComponent } from '../tonerApp/toner-tracking/toner-tracking.component';


const routes: Routes = [
  {path:"", component:LayoutComponent, children: [
    {path:"toner",component:TonerComponent,canActivate:[LoginGuard]},
    {path:"storage",component:StorageComponent},
    {path:"printer/add",component:PrinterAddComponent},
    {path:"toner/add",component:TonerAddComponent},
    {path:"",component:HomeComponent},
    {path:"users",component:UserComponent},
    {path:"passwordchange",component:ProfileComponent},
    {path:"printer",component:PrinterComponent, canActivate:[LoginGuard]},
    {path:"tonerTracking",component:TonerTrackingComponent, canActivate:[LoginGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
