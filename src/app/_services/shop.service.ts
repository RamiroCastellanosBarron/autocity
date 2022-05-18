import { Shop } from '../_models/shop.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl;

  shops: Shop[] = [];

  constructor(private http: HttpClient) { }

  getShops() {
    if (this.shops.length > 0) return of(this.shops);
    return this.http.get<Shop[]>(this.baseUrl + 'Shops').pipe(
      map(shops => {
        this.shops = shops;
        return shops;
      })
    )
  }

  getSelectedShop(id: string) {
    const shop = this.shops.find(x => x.id.toString() === id);
    if (shop !== undefined) return of(shop);
    return this.http.get<Shop>(this.baseUrl + 'Shops/' + id);
  }

  postShop(model: any) {
    return this.http.post(this.baseUrl + 'Shops', model);
  }

  deleteShop(id: string): Observable<Shop> {
    return this.http.delete<Shop>(this.baseUrl + 'Shops/' + id);
  }

  updateShop(shop: Shop) {
    return this.http.put(this.baseUrl + 'Shops/' + shop.id, shop);
  }

  getRankedShops() {
    return this.http.get(this.baseUrl + 'Shops/s');
  }

}
