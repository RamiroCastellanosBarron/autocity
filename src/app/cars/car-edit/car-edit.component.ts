import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/_services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/_models/car.model';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  model: any = {};
  car: Car = {
    id: 0,
    brand: '',
    model: '',
    year: 0,
    customerId: 0,
    niv: '',
    color: '',
    imageUrl: ''
  };

  constructor(private carService: CarService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.showCar();
  }

  showCar() {
    this.carService.getOneCar(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;
      this.car.id = response.id;
      this.car.brand = response.brand;
      this.car.model = response.model;
      this.car.year = response.year;
      this.car.customerId = this.model.customer.id;
      this.car.niv = this.model.niv;
      this.car.color = this.model.color;
      this.car.imageUrl = this.model.imageUrl;
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

  actualizarCarro(car: Car) {
    this.carService.updateCar(this.car).subscribe(response => {
      console.log(response);
      this.toastr.success('Car updated');
      this.router.navigateByUrl('/Cars/' + car.id);
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
