import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrinterComponent } from './components/printer/printer.component';
import { LoginComponent } from './components/login/login.component';
import { PrinterImageComponent } from './components/printer-image/printer-image.component';
import { StorageComponent } from './components/storage/storage.component';
import { NaviComponent } from './components/navi/navi.component';
import { AuthInterceptor } from './intercepters/auth.interceptor';
import { TonerComponent } from './components/toner/toner.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PrinterComponent,
    LoginComponent,
    PrinterImageComponent,
    StorageComponent,
    NaviComponent,
    TonerComponent,
    HomeComponent
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
