import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skillURL = environment.URL + '/skill';
  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillURL + '/lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.skillURL + `/detail/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.skillURL + '/create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.skillURL + `/update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skillURL + `/delete/${id}`);
  }

  getTechs() {  

    return [
      { text: 'ANGULAR', value: 1 },
      { text: 'BOOTSTRAP', value: 2 },
      { text: 'C++', value: 3 },
      { text: 'C#', value: 4 },
      { text: 'C', value: 5 },
      { text: 'CSS3', value: 6 },
      { text: 'ESVELTE', value: 7 },
      { text: 'EXPRESS.JS', value: 8 },
      { text: 'GO', value: 9 },
      { text: 'HTML5', value: 10 },
      { text: 'JAVA', value: 11 },
      { text: 'JAVASCRIPT', value: 12 },
      { text: 'JQUERY', value: 13 },
      { text: 'KOTLIN', value: 14 },
      { text: 'MongoDB', value: 15 },
      { text: 'MySQL', value: 16 },
      { text: 'NEXT.JS', value: 17 },
      { text: 'NODE.JS', value: 18 },
      { text: 'PYTHON', value: 19 },
      { text: 'PHP', value: 20 },
      { text: 'REACT.JS', value: 21 },
      { text: 'RUBY', value: 22 },
      { text: 'SPRING BOOT', value: 23 },
      { text: 'SWIFT', value: 24 },
      { text: 'TYPESCRIPT', value: 25 },
      { text: 'VUE.JS', value: 26 }
    ];
  }
}