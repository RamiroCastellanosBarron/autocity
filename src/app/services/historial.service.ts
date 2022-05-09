import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  baseUrl = 'https://localhost:7126/api/Citas';

  constructor(private http: HttpClient) { }

  getCitasByCarId(id: string){
    return this.http.get(this.baseUrl + '/s/' + id);
  }


}
