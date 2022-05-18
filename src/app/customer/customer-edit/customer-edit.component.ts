import { CustomerService } from '../../_services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/_models/car.model';
import { Customer } from 'src/app/_models/customer.model';
import { CarService } from 'src/app/_services/car.service';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { take } from 'rxjs';
import { User } from 'src/app/_models/user';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  model: any = {};
  customer: Customer = {
    id: 0,
    name: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    rfc: '',
    edad: 0,
    imageUrl: ''
  }

  constructor(
    private customersService: CustomerService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.showCustomer();
  }

  showCustomer() {
    this.customersService.getOneCustomerById(this.route.snapshot.paramMap.get('id')).subscribe(response => {

      this.model = response;

      this.customer.id = this.model.id;
      this.customer.name = this.model.name;
      this.customer.apellidoPaterno = this.model.apellidoPaterno;
      this.customer.apellidoMaterno = this.model.apellidoMaterno;
      this.customer.rfc = this.model.rfc;
      this.customer.edad = this.model.edad;
      this.customer.imageUrl = this.model.imageUrl;

    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

  updateCustomer(customer: Customer) {
    this.customersService.updateCustomer(this.customer).subscribe(response => {
      console.log(response);
      this.toastr.success('Customer updated successfully');
      this.router.navigateByUrl('/Customer/' + customer.id);
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
