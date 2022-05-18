import { CustomerService } from '../../_services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/_services/car.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  model: any = {};
  cars: any;

  constructor(
    private customersService: CustomerService,
    private carService: CarService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.showCustomer();
    this.loadCustomerCars();
  }

  showCustomer() {
    this.customersService.getOneCustomerById(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  loadCustomerCars() {
    this.carService.getCarsByCustomerId(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.cars = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }




  borrar(id: string) {

  }

}
