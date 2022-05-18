import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../_models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;

  customers: Customer[] = [];

  constructor(
    private http: HttpClient

  ) { }

  getOneCustomerById(id: string) {
    return this.http.get(this.baseUrl + 'Customers/' + id);
  }

  getAllCustomers() {
    if (this.customers.length > 0) return of(this.customers);
    return this.http.get<Customer[]>(this.baseUrl + 'Customers').pipe(
      map(customers => {
        this.customers = customers;
        return customers;
      })
    )
  }

  updateCustomer(model: any) {
    return this.http.put(this.baseUrl + 'Customers/' + model.id, model)
  }

  postCustomer(customer: Customer) {
    return this.http.post(this.baseUrl + 'Customers', customer);
  }

  deleteCustomer(id: string) {
    return this.http.delete(this.baseUrl + 'Customers/' + id);
  }

}
