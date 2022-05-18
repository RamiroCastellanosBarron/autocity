import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio } from '../_models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  bringServices(id: string): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.baseUrl + 'Servicios/' + id);
  }

  getServiceByShopId(id: string) {
    return this.http.get(this.baseUrl + 'Servicios/' + id);
  }

  getServiceByServiceId(id: string) {
    return this.http.get(this.baseUrl + 'Servicios/s/' + id);
  }

  postService(model: any) {
    return this.http.post(this.baseUrl + 'Servicios', model);
  }

  updateService(servicio: Servicio) {
    return this.http.put(this.baseUrl + 'Servicios/' + servicio.id, servicio);
  }

}
