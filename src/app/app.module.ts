import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { BusyService } from './services/busy.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarListComponent } from './cars/car-list/car-list.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ToastrModule } from 'ngx-toastr';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { CarNewComponent } from './cars/car-new/car-new.component';
import { HistorialDetailComponent } from './historial/historial-detail/historial-detail.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ShopNewComponent } from './shop/shop-new/shop-new.component';
import { ShopEditComponent } from './shop/shop-edit/shop-edit.component';
import { ServicioNewComponent } from './servicios/servicio-new/servicio-new.component';
import { ServicioEditComponent } from './servicios/servicio-edit/servicio-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerNewComponent } from './customer/customer-new/customer-new.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { ReviewNewComponent } from './reviews/review-new/review-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    NavComponent,
    HomeComponent,
    CarDetailComponent,
    CarEditComponent,
    CarNewComponent,
    HistorialDetailComponent,
    ShopListComponent,
    ShopDetailComponent,
    EventNewComponent,
    EventListComponent,
    ShopNewComponent,
    ShopEditComponent,
    ServicioNewComponent,
    ServicioEditComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerNewComponent,
    CustomerEditComponent,
    EventDetailComponent,
    EventEditComponent,
    DateInputComponent,
    TextInputComponent,
    ReviewNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
