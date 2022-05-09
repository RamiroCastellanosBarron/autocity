import { Shop } from './../models/shop.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7126/api/Shops';

  constructor(private http:HttpClient) { }

  getShops() {
    return this.http.get(this.baseUrl);
  }

  getSelectedShop(id: string): Observable<Shop>{
    return this.http.get<Shop>(this.baseUrl + '/' + id);
  }

  postShop(model: any){
    return this.http.post('https://localhost:7126/api/Shops/', model);
  }

  deleteShop(id: string): Observable<Shop> {
    return this.http.delete<Shop>(this.baseUrl + '/' + id);
  }

  updateShop(shop: Shop) {
    return this.http.put(this.baseUrl + '/' + shop.id, shop);
  }

  getRankedShops() {
    return this.http.get(this.baseUrl + '/s');
  }

}
