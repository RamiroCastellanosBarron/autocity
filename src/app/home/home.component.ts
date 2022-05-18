import { environment } from './../../environments/environment';
import { ShopService } from 'src/app/_services/shop.service';
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
