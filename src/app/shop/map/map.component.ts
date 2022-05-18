import { ShopService } from 'src/app/_services/shop.service';
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  model: any;
  long: number = -100.3684954;
  lat: number = 25.6876847;

  map?: Mapboxgl.Map;

  constructor(
    private ShopService: ShopService,

  ) { }

  ngOnInit(): void {
    this.showMap();
    this.getRankedShops();
  }

  showMap() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.long, this.lat],
      zoom: 15
    });

    const nav = new Mapboxgl.NavigationControl();
    this.map.addControl(nav, 'bottom-right');

    this.map.addControl(new Mapboxgl.FullscreenControl({container: document.querySelector('#map')}));
  }

  setNewCoords(id: number) {
    this.getRankedShops();
    this.model.forEach(shop => {
      console.log(shop);
      if (shop.id == id) {
        this.long = shop.longitude;
        this.lat = shop.latitude;
        this.showMap();
      }
    });
  }

  getRankedShops() {
    this.ShopService.getRankedShops().subscribe(response => {
      this.model = response;
      this.model.forEach(shop => {
        const marker = new Mapboxgl.Marker().setLngLat([shop.longitude, shop.latitude]).addTo(this.map);
      })
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
