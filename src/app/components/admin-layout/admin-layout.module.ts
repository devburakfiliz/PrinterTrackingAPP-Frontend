import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { UserAddComponent } from '../userApp/user-add/user-add.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
