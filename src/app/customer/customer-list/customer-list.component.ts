import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any;

  constructor(
    private customersService: CustomerService,
    private toastr:ToastrService,
    ) { }

  ngOnInit(): void {
    this.showAllCustomers();
  }

  showAllCustomers(){
    this.customersService.getAllCustomers().subscribe(response => {
      this.customers = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }


}
