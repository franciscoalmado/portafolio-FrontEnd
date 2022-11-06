import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/service/educacion-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion: Educacion[] = [];
  
  constructor(private educacionService: EducacionServiceService, private tokenService: TokenService) { }

  isLogged = false; 

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionService.list().subscribe(data =>{
      this.educacion = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe((data) => console.info(data));
      this.cargarEducacion();
    }
  } 
}