import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { PrinterComponent } from './components/printer/printer.component';

const routes: Routes = [
  {path:"printer",component:PrinterComponent},
  {path:"",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
