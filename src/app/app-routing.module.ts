import { HomeComponent } from './home/home.component';
import { ReviewNewComponent } from './reviews/review-new/review-new.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerNewComponent } from './customer/customer-new/customer-new.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ServicioEditComponent } from './servicios/servicio-edit/servicio-edit.component';
import { ServicioNewComponent } from './servicios/servicio-new/servicio-new.component';
import { ShopEditComponent } from './shop/shop-edit/shop-edit.component';
import { ShopNewComponent } from './shop/shop-new/shop-new.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { AppComponent } from './app.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { HistorialDetailComponent } from './historial/historial-detail/historial-detail.component';
import { CarNewComponent } from './cars/car-new/car-new.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Cars', component: CarListComponent },
  { path: 'Cars/:id', component: CarDetailComponent },
  { path: 'Car/Edit/:id', component: CarEditComponent },
  { path: 'Car/New', component: CarNewComponent },

  { path: 'Historial/:id', component: HistorialDetailComponent },

  { path: 'Shops', component: ShopListComponent },
  { path: 'Shops/:id', component: ShopDetailComponent },
  { path: 'Shop/New', component: ShopNewComponent },
  { path: 'Shop/Edit/:id', component: ShopEditComponent },

  { path: 'Service/New/:id', component: ServicioNewComponent },

  { path: 'Shop/Services/:id', component: ServicioEditComponent },

  { path: 'Event/New', component: EventNewComponent },
  { path: 'Events', component: EventListComponent },
  { path: 'Events/:id', component: EventDetailComponent },
  { path: 'Event/Edit/:id', component: EventEditComponent },

  {path: 'Customers', component: CustomerListComponent},
  {path: 'Customer/New', component: CustomerNewComponent},
  {path: 'Customer/Edit/:id', component: CustomerEditComponent},
  {path: 'Customer/:id', component: CustomerDetailComponent},

  {path: 'Review/New', component: ReviewNewComponent},

  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
