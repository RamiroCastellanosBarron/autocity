import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Servicio } from 'src/app/_models/servicio.model';
import { Shop } from 'src/app/_models/shop.model';
import { ServiciosService } from 'src/app/_services/servicios.service';
import { ShopService } from 'src/app/_services/shop.service';

@Component({
  selector: 'app-servicio-new',
  templateUrl: './servicio-new.component.html',
  styleUrls: ['./servicio-new.component.css']
})
export class ServicioNewComponent implements OnInit {
  model: any = {};

  service: Servicio = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    shopId: 0
  };

  shopName: any = {};
  shopId: any;

  constructor(
    private serviciosService: ServiciosService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private shopService: ShopService) { }

  ngOnInit(): void {
    this.getSelectedShop();
  }

  addService() {
    this.serviciosService.postService(this.service).subscribe(response => {
      console.log(response);
      console.log(this.service);
      this.toastr.success('The service was added successfully');
      this.router.navigateByUrl('/Shops/' + this.service.shopId);
    }, error => {
      this.toastr.error('The service could not be added');
      console.log(error);
    })
  }

  getSelectedShop() {
    this.shopService.getSelectedShop(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.shopName = response;
      this.shopId = response.id;
      this.service.shopId = response.id;
      console.log(response);
    }, error => {
      this.toastr.error('An error occurred');
      console.log(error);
    })
  }

}
