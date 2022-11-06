import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  personaURL = environment.URL + '/personas';
  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.personaURL + "/list");
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.personaURL + `/detail/${id}`);
  }

  public save(idioma: Persona): Observable<any>{
    return this.httpClient.post<any>(this.personaURL + "/create", idioma);
  }

  public update(id: number, Persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.personaURL + `/update/${id}`, Persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.personaURL + `/delete/${id}`);
  }
}