import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/_models/car.model';
import { CarService } from 'src/app/_services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carros: Car[];
  model: any = {};

  constructor(private carService: CarService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.showAllCars();
  }

  showAllCars(){
    this.carService.getAllCars().subscribe(response => {
      console.log(response);
      this.carros = response;
    }, error => {
      console.log(error);
    })
  }

}
