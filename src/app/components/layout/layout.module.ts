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
import { PrinterFilterPipe } from '../../pipes/printer-filter.pipe';
import { PrinterImageComponent } from '../printerApp/printer-image/printer-image.component';
import { StorageComponent } from '../storage/storage.component';
import { PrinterComponent } from '../printerApp/printer/printer.component';
import { UserComponent } from '../userApp/user/user.component';
import { TonerPipePipe } from '../../pipes/toner-pipe.pipe';
import { PrinterBrandComponent } from '../printerApp/printer-brand/printer-brand.component';
import { PrinterModelComponent } from '../printerApp/printer-model/printer-model.component';
import { TonerModelComponent } from '../tonerApp/toner-model/toner-model.component';
import { TonerBrandComponent } from '../tonerApp/toner-brand/toner-brand.component';
import { ProfileComponent } from '../profile/profile.component';
import { TonerTrackingComponent } from '../tonerApp/toner-tracking/toner-tracking.component';
import { TonerTrackingFilterPipe } from '../../pipes/toner-tracking-filter.pipe';


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
    ProfileComponent,
    TonerTrackingComponent,
    TonerTrackingFilterPipe,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }
