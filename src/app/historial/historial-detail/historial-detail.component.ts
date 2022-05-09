import { CarService } from './../../services/car.service';
import { ToastrService } from 'ngx-toastr';
import { HistorialService } from './../../services/historial.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from 'src/app/models/history.model';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-historial-detail',
  templateUrl: './historial-detail.component.html',
  styleUrls: ['./historial-detail.component.css']
})
export class HistorialDetailComponent implements OnInit {
  model: any;
  singleCar: any = {};

  constructor(
    private historialService: HistorialService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
    ) { }

  ngOnInit(): void {
    this.getCarHistoryByCarId();
    this.getCurrentCar();
  }

  getCarHistoryByCarId() {
    this.historialService.getCitasByCarId(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;
      console.log(response);
     }, error => {
      console.log(error);
    })
  }

  getCurrentCar() {
    this.carService.getOneCar(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.singleCar = response;
    }, error => {
      console.log(error);
    })
  }

  goBack(id: string){
    
  }





}
