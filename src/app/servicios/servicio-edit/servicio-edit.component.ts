import { Servicio } from 'src/app/_models/servicio.model';
import { ToastrService } from 'ngx-toastr';
import { ServiciosService } from 'src/app/_services/servicios.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {
  model: any = {};
  servicio: Servicio = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    shopId: 0
  };

  constructor(
    private serviciosService: ServiciosService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showCurrentService();
  }

  showCurrentService() {
    this.serviciosService.getServiceByServiceId(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;

      this.servicio.id = this.model.id;
      this.servicio.name = this.model.name;
      this.servicio.description = this.model.description;
      this.servicio.price = this.model.price;
      this.servicio.shopId = this.model.shop.id;

      console.log(this.servicio);


    }, error => {
      this.toastr.error('An error occurred');
      console.log(error);
    })
  }

  updateService(servicio: Servicio) {
    this.serviciosService.updateService(this.servicio).subscribe(response => {
      console.log(response);
      this.toastr.success('Service updated successfully');
      this.router.navigateByUrl('/Shops/' + servicio.shopId);
    }, error => {
      console.log(error);
      this.toastr.error('Service could not be updated');
    })
  }

}
