import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';

@Component({
  selector: 'app-new-experiencia-laboral',
  templateUrl: './new-experiencia-laboral.component.html',
  styleUrls: ['./new-experiencia-laboral.component.css']
})
export class NewExperienciaLaboralComponent implements OnInit {
  empresa: string = "";
  cargo: string = "";
  periodo: string = "";
  funciones: string = ""; 

  constructor(private experienciaLaboralService: ExperienciaLaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experienciaLaboral = new ExperienciaLaboral(this.empresa, this.cargo, this.periodo, this.funciones);

    this.experienciaLaboralService.save(experienciaLaboral).subscribe((data) => console.info(data)); 
    alert("Experiencia Laboral agregada correctamente");
    this.router.navigate(['']);
  }
} 