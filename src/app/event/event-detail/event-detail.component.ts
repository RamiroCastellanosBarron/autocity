import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from '../../_services/citas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  model: any = {};
  eventId: number;

  constructor(
    private citaService: CitasService,
    private route: ActivatedRoute,
    private toastr:ToastrService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.loadSingleCita();
  }

  loadSingleCita(){
    this.citaService.getOneCitaById(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;
      this.eventId = this.model.id;
      console.log(this.eventId);
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  borrar(id: string){
    this.citaService.deleteCita(id).subscribe(response => {
      this.toastr.success('Event deleted successfully');
      this.router.navigateByUrl('/Events');
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
