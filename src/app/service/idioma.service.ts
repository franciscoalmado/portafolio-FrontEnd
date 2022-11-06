import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  idiomaURL = environment.URL + '/idiomas';
  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.idiomaURL + "/lista");
  }

  public detail(id: number): Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.idiomaURL + `/detail/${id}`);
  }

  public save(idioma: Idioma): Observable<any>{
    return this.httpClient.post<any>(this.idiomaURL + "/create", idioma);
  }

  public update(id: number, idioma: Idioma): Observable<any>{
    return this.httpClient.put<any>(this.idiomaURL + `/update/${id}`, idioma);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.idiomaURL + `/delete/${id}`);
  }

  getIdiomas() {  

    return [
      { text: 'ALEMÁN', value: 1 },
      { text: 'ÁRABE ESTÁNDAR MODERNO', value: 2 },
      { text: 'CHINO MANDARÍN', value: 3 },
      { text: 'ESPAÑOL', value: 4 },
      { text: 'FRANCÉS', value: 5 },
      { text: 'HINDI', value: 6 },
      { text: 'INGLÉS', value: 7 },
      { text: 'ITALIANO', value: 8 },
      { text: 'JAPONÉS', value: 9 },
      { text: 'PORTUGUÉS', value: 10 },
      { text: 'RUSO', value: 11 }
    ];
  }

  getNivelesDeIdiomas() {  

    return [
      { text: 'A1', value: 1 },
      { text: 'A2', value: 2 },
      { text: 'B1', value: 3 },
      { text: 'B2', value: 4 },
      { text: 'C1', value: 5 },
      { text: 'C2', value: 6 },
      { text: 'NATIVO', value: 7 }
    ];
  }
}