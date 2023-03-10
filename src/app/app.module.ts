import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrinterComponent } from './components/printerApp/printer/printer.component';
import { LoginComponent } from './components/login/login.component';
import { PrinterImageComponent } from './components/printerApp/printer-image/printer-image.component';
import { StorageComponent } from './components/storage/storage.component';
import { NaviComponent } from './components/navi/navi.component';
import { AuthInterceptor } from './intercepters/auth.interceptor';
import { TonerComponent } from './components/tonerApp/toner/toner.component';
import { HomeComponent } from './components/home/home.component';
import { PrinterAddComponent } from './components/printerApp/printer-add/printer-add.component';
import { PrinterDeleteComponent } from './components/printerApp/printer-delete/printer-delete.component';
import { PrinterUpdateComponent } from './components/printerApp/printer-update/printer-update.component';
import { TonerAddComponent } from './components/tonerApp/toner-add/toner-add.component';
import { TonerDeleteComponent } from './components/tonerApp/toner-delete/toner-delete.component';
import { TonerUpdateComponent } from './components/tonerApp/toner-update/toner-update.component';
import { PrinterFilterPipe } from './components/pipes/printer-filter.pipe';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PrinterComponent,
    LoginComponent,
    PrinterImageComponent,
    StorageComponent,
    NaviComponent,
    TonerComponent,
    HomeComponent,
    PrinterAddComponent,
    PrinterDeleteComponent,
    PrinterUpdateComponent,
    TonerAddComponent,
    TonerDeleteComponent,
    TonerUpdateComponent,
    PrinterFilterPipe,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
