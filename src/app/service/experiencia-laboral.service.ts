import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExperienciaLaboral } from '../model/experiencia-laboral';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' 
})
export class ExperienciaLaboralService {
  experienciaLaboralURL = environment.URL + '/experiencia-laboral';
  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.experienciaLaboralURL + '/lista');
  }

  public detail(id: number): Observable<ExperienciaLaboral>{
    return this.httpClient.get<ExperienciaLaboral>(this.experienciaLaboralURL + `/detail/${id}`);
  }

  public save(experienciaLaboral: ExperienciaLaboral): Observable<any>{
    return this.httpClient.post<any>(this.experienciaLaboralURL + '/create', experienciaLaboral);
  }

  public update(id: number, experienciaLaboral: ExperienciaLaboral): Observable<any>{
    return this.httpClient.put<any>(this.experienciaLaboralURL + `/update/${id}`, experienciaLaboral);
  }

  public delete(id: number): Observable<ExperienciaLaboral>{
    return this.httpClient.delete<any>(this.experienciaLaboralURL + `/delete/${id}`);
  }
}