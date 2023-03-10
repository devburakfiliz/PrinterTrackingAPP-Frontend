import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { PrinterAddComponent } from './components/printerApp/printer-add/printer-add.component';
import { PrinterComponent } from './components/printerApp/printer/printer.component';
import { StorageComponent } from './components/storage/storage.component';
import { TonerComponent } from './components/tonerApp/toner/toner.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:HomeComponent},
  {path:"printer",component:PrinterComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"toner",component:TonerComponent,canActivate:[LoginGuard]},
  {path:"storage",component:StorageComponent},
  {path:"printer/add",component:PrinterAddComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
