import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CitasService } from './../../services/citas.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {

  colorTheme = 'theme-dark-blue';

  bsConfig?: Partial<BsDatepickerConfig>;

  model: any = {};

  constructor(private citaService: CitasService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }



  addEvent() {
    this.citaService.postCita(this.model).subscribe(response => {
      this.model = response;
      console.log(response);
      this.toastr.success('New Event added successfully');
      this.router.navigateByUrl('/Events');
    }, error => {
      console.log(error);
      this.toastr.error('Failed to add event');
    })

  }


}
