import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/service/educacion-service.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  institucion: string = "";
  carrera: string = "";
  periodo: string = "";
  comentarios: string = "";

  constructor(private educacionService: EducacionServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.institucion, this.carrera, this.periodo, this.comentarios);
    
      this.educacionService.save(educacion).subscribe((data) => console.info(data)); 
      alert("Educación agregada correctamente");
      this.router.navigate(['']);
  } 
} 