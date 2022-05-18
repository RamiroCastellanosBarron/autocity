import { ToastrService } from 'ngx-toastr';
import { CitasService } from '../../_services/citas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  model: any;

  constructor(private citasService: CitasService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showAllCitas();
  }

  showAllCitas() {
    this.citasService.getAllEvents().subscribe(response => {
      this.model = response;
      console.log(response);
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
