import { ToastrService } from 'ngx-toastr';
import { ShopService } from '../../_services/shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  model: any;

  constructor(private shopService:ShopService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.mostrarTiendas();
  }

  mostrarTiendas(){
    this.shopService.getShops().subscribe(response => {
      this.model = response;
    }, error => {
      this.toastr.error('An error occurred');
    })
  }

}
