import { environment } from './../../environments/environment';
import { ShopService } from 'src/app/services/shop.service';
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any;
  long: number = -100.3864256;
  lat: number = 25.6498502;

  map?: Mapboxgl.Map;

  constructor(
    private ShopService: ShopService,

  ) { }

  ngOnInit(): void {
    this.showMap();
    this.getRankedShops();
  }

  showMap(){
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.long, this.lat],
      zoom: 16
    })
  }

  setNewCoords(id: number){
    this.model.forEach(shop => {
      console.log(shop);
      if(shop.id == id){
        this.long = shop.longitude;
        this.lat = shop.latitude;
        this.showMap();
      }
    });

  }

  getRankedShops() {
    this.ShopService.getRankedShops().subscribe(response => {
      this.model = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
