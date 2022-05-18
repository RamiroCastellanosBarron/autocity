import { ToastrService } from 'ngx-toastr';
import { ShopService } from '../../_services/shop.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-new',
  templateUrl: './shop-new.component.html',
  styleUrls: ['./shop-new.component.css']
})
export class ShopNewComponent implements OnInit {
  model: any = {};

  constructor(private shopService: ShopService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  addShop() {
    this.shopService.postShop(this.model).subscribe(response => {
      this.toastr.success('Shop added successfully');
      this.router.navigateByUrl('/Shops');
    }, error => {
      console.log(error);
      this.toastr.error('An error occurred');
    })
  }

}
