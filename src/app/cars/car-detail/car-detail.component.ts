import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/_services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/_models/car.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  model: any = {};

  constructor(private carService: CarService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ShowCar();
  }

  ShowCar() {
    this.carService.getOneCar(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      console.log(response);
      this.model = response;
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

  borrar(id: string) {
    this.carService.deleteCar(id).subscribe(response => {
      this.toastr.success('Car deleted successfully');
      console.log(response);
      this.router.navigateByUrl('/Cars');
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
