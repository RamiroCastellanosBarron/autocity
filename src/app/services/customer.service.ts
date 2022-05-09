import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'https://localhost:7126/api/Customers';

  constructor(
    private http: HttpClient

  ) { }

  getOneCustomerById(id: string){
    return this.http.get(this.baseUrl + '/' + id);
  }

  getAllCustomers(){
    return this.http.get(this.baseUrl);
  }

  updateCustomer(model: any){
    return this.http.put(this.baseUrl + '/' + model.id, model)
  }

  postCustomer(customer: Customer){
    return this.http.post(this.baseUrl, customer);
  }

  deleteCustomer(id: string){
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
