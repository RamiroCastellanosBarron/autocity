import { CustomerService } from '../../_services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/_services/car.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {
  model: any = {};

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private customerService: CustomerService,
    ) { }

  ngOnInit(): void {
  }

  addCustomer() {
    this.customerService.postCustomer(this.model).subscribe(response => {
      this.model = response;
      this.toastr.success('Customer added successfully!');
      this.router.navigateByUrl('/Customers');
    }, error => {
      this.toastr.error('Customer could not be added');
    })
  }
}
