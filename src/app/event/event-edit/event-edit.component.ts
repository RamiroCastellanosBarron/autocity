import { NgControl, ControlValueAccessor } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Self } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaUpdate } from 'src/app/models/citatoupdate.model';
import { CitasService } from 'src/app/services/citas.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  colorTheme = 'theme-dark-blue';

  bsConfig?: Partial<BsDatepickerConfig>;

  model: any = {};
  eventId: number;
  cita: CitaUpdate = {
    id: 0,
    name: '',
    date: '',
    time: '',
    carId: 0,
    servicioId: 0
  };

  constructor(
    private citaService: CitasService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,

  ) {}



  ngOnInit(): void {
    this.loadSingleCita();
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  loadSingleCita() {
    this.citaService.getOneCitaById(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;

      this.cita.id = this.model.id;
      this.cita.name = this.model.name;
      this.cita.date = this.model.date;
      this.cita.time = this.model.time;
      this.cita.carId = this.model.car.id;
      this.cita.servicioId = this.model.servicio.id;

      console.log(this.cita);


    }, error => {
      console.log(error);
    })
  }

  actualizarCita(cita: CitaUpdate) {
    this.citaService.updateCita(this.cita).subscribe(response => {
      this.toastr.success('Event updated successfully');
      this.router.navigateByUrl('/Events/' + this.cita.id);
    }, error => {
      console.log(error);
      this.toastr.error('Event could not be updated');
    })
  }

}
