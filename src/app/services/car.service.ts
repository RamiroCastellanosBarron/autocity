import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = 'https://localhost:7126/api/Cars';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  getOneCar(id: string): Observable<Car> {
    return this.http.get<Car>(this.baseUrl + '/' + id);
  }

  getCarsByCustomerId(id: string) {
    return this.http.get(this.baseUrl + '/s/' + id);
  }

  postNewCar(model: any) {
    return this.http.post(this.baseUrl, model);
  }

  deleteCar(id: string): Observable<Car> {
    return this.http.delete<Car>(this.baseUrl + '/' + id);
  }

  updateCar(car: Car) {
    return this.http.put(this.baseUrl + '/' + car.id, car);
  }

}
