import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { BusyService } from './_services/busy.service';

import { CarListComponent } from './cars/car-list/car-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { CarNewComponent } from './cars/car-new/car-new.component';
import { HistorialDetailComponent } from './historial/historial-detail/historial-detail.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { EventListComponent } from './event/event-list/event-list.component';
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
import { ReviewNewComponent } from './reviews/review-new/review-new.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { RolesModalComponent } from './modals/roles-modal/roles-modal.component';
import { MapComponent } from './shop/map/map.component';

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
    HasRoleDirective,
    AdminPanelComponent,
    UserManagementComponent,
    RolesModalComponent,
    RegisterComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberListComponent,
    MapComponent,
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
    ModalModule.forRoot(),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
