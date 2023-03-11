import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule) },
  { path: 'admin', loadChildren: () => import('./components/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) },
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
