import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  baseUrl = 'https://localhost:7126/api/Servicios';

  constructor(private http: HttpClient) { }

  bringServices(id: string): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.baseUrl + '/' + id);
  }

  getServiceByShopId(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  getServiceByServiceId(id: string) {
    return this.http.get(this.baseUrl + '/s/' + id);
  }

  postService(model: any) {
    return this.http.post(this.baseUrl, model);
  }

  updateService(servicio: Servicio) {
    return this.http.put(this.baseUrl + '/' + servicio.id, servicio);
  }

}
