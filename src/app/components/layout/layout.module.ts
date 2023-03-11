import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NaviComponent } from '../navi/navi.component';

import { FormsModule,ReactiveFormsModule  } from "@angular/forms";

import { TonerComponent } from '../tonerApp/toner/toner.component';
import { HomeComponent } from '../home/home.component';
import { PrinterAddComponent } from '../printerApp/printer-add/printer-add.component';
import { PrinterDeleteComponent } from '../printerApp/printer-delete/printer-delete.component';
import { PrinterUpdateComponent } from '../printerApp/printer-update/printer-update.component';
import { TonerAddComponent } from '../tonerApp/toner-add/toner-add.component';
import { TonerDeleteComponent } from '../tonerApp/toner-delete/toner-delete.component';
import { TonerUpdateComponent } from '../tonerApp/toner-update/toner-update.component';
import { PrinterFilterPipe } from '../pipes/printer-filter.pipe';
import { PrinterImageComponent } from '../printerApp/printer-image/printer-image.component';
import { StorageComponent } from '../storage/storage.component';
import { PrinterComponent } from '../printerApp/printer/printer.component';
import { UserComponent } from '../userApp/user/user.component';
import { TonerPipePipe } from '../pipes/toner-pipe.pipe';
import { PrinterBrandComponent } from '../printer-brand/printer-brand.component';
import { PrinterModelComponent } from '../printer-model/printer-model.component';
import { TonerModelComponent } from '../toner-model/toner-model.component';
import { TonerBrandComponent } from '../toner-brand/toner-brand.component';
import { ProfileComponent } from '../profile/profile.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NaviComponent,
    PrinterImageComponent,
    StorageComponent,
    TonerComponent,
    HomeComponent,
    PrinterAddComponent,
    PrinterDeleteComponent,
    PrinterUpdateComponent,
    TonerAddComponent,
    TonerDeleteComponent,
    TonerUpdateComponent,
    PrinterFilterPipe,
    PrinterComponent,
    UserComponent,
    TonerPipePipe,
    PrinterBrandComponent,
    PrinterModelComponent,
    TonerModelComponent,
    TonerBrandComponent,  
    ProfileComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }
