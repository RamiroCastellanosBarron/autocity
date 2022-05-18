import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../_models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = environment.apiUrl;

  cars: Car[] = [];

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]> {
    if(this.cars.length > 0) return of(this.cars);
    return this.http.get<Car[]>(this.baseUrl + 'Cars').pipe(
      map(cars => {
        this.cars = cars;
        return cars;
      })
    )
  }

  getOneCar(id: string): Observable<Car> {
    return this.http.get<Car>(this.baseUrl + 'Cars/' + id);
  }

  getCarsByCustomerId(id: string) {
    return this.http.get(this.baseUrl + 'Cars/s/' + id);
  }

  postNewCar(model: any) {
    return this.http.post(this.baseUrl + 'Cars', model);
  }

  deleteCar(id: string): Observable<Car> {
    return this.http.delete<Car>(this.baseUrl + 'Cars/' + id);
  }

  updateCar(car: Car) {
    return this.http.put(this.baseUrl + 'Cars/' + car.id, car);
  }

}
