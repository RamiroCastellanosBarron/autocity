import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shop } from 'src/app/models/shop.model';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  model: any = {};
  shop: Shop = {
    id: 0,
    name: '',
    rating: 0,
    longitude: 0,
    latitude: 0,
    imageUrl: '',
    telephone: '',
    webUrl: '',
    bio: '',
    email: '',
    calle: '',
    numero: '',
    codigoPostal: 0,
    colonia: '',
    municipio: '',
    estado: '',
    pais: ''
  };

  constructor(private shopService: ShopService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.showShop();
  }

  showShop() {
    this.shopService.getSelectedShop(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.model = response;

      this.shop.id = response.id;
      this.shop.name = response.name;
      this.shop.rating = response.rating;
      this.shop.longitude = response.longitude;
      this.shop.latitude = response.latitude;
      this.shop.imageUrl = response.imageUrl;
      this.shop.telephone = response.telephone;
      this.shop.webUrl = response.webUrl;
      this.shop.bio = response.bio;
      this.shop.email = response.email;
      this.shop.calle = response.calle;
      this.shop.numero = response.numero;
      this.shop.codigoPostal = response.codigoPostal;
      this.shop.colonia = response.colonia;
      this.shop.municipio = response.municipio;
      this.shop.estado = response.estado;
      this.shop.pais = response.pais;


    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

  updateShop(shop: Shop) {
    this.shopService.updateShop(this.shop).subscribe(response => {
      console.log(response);
      this.toastr.success('Shop information updated');
      this.router.navigateByUrl('/Shops/' + shop.id);
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
