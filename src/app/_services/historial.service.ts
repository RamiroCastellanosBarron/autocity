import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCitasByCarId(id: string){
    return this.http.get(this.baseUrl + 'Citas/s/' + id);
  }

}
