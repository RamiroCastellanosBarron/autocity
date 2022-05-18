import { of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../_models/cita.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  baseUrl = environment.apiUrl;

  citas: Cita[] = [];

  constructor(private http: HttpClient) { }

  getAllEvents() {
    if(this.citas.length > 0) return of(this.citas);
    return this.http.get<Cita[]>(this.baseUrl + 'Citas').pipe(
      map(citas => {
        this.citas = citas;
        return citas;
      })
    );
  }

  getOneCitaById(id: string){
    return this.http.get(this.baseUrl + 'Citas/' + id);
  }

  postCita(model: any) {
    return this.http.post(this.baseUrl + 'Citas', model);
  }

  deleteCita(id: string) {
    return this.http.delete(this.baseUrl + 'Citas/' + id);
  }

  updateCita(cita: Cita){
    return this.http.put(this.baseUrl + 'Citas/' + cita.id, cita);
  }
}
