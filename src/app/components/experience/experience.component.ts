import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienciaLaboral: ExperienciaLaboral[] = [];

  constructor(private experienciaLaboralService: ExperienciaLaboralService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperienciaLaboral();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperienciaLaboral():void{
    this.experienciaLaboralService.list().subscribe((data) => {
      this.experienciaLaboral = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.experienciaLaboralService.delete(id).subscribe((data) => console.info(data));
      this.cargarExperienciaLaboral();
    } 
  }
}