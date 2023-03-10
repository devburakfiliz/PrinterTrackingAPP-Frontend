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
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { PrinterImageComponent } from '../printerApp/printer-image/printer-image.component';
import { StorageComponent } from '../storage/storage.component';
import { PrinterComponent } from '../printerApp/printer/printer.component';


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
    AdminPageComponent,
    PrinterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }
