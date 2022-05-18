import { CarService } from 'src/app/_services/car.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css']
})
export class CarNewComponent implements OnInit {
  model: any = {};

  constructor(private toastr: ToastrService, private router: Router, private carService: CarService) { }

  ngOnInit(): void {
  }

  addCar() {
    this.carService.postNewCar(this.model).subscribe(response => {
      console.log(response);
      this.toastr.success('Car added successfully!');
      this.router.navigateByUrl('/Cars');
    }, error => {
      this.toastr.error('Car could not be added');
    })
  }

}
