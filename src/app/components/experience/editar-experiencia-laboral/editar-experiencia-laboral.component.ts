import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';

@Component({
  selector: 'app-editar-experiencia-laboral',
  templateUrl: './editar-experiencia-laboral.component.html',
  styleUrls: ['./editar-experiencia-laboral.component.css']
})
export class EditarExperienciaLaboralComponent implements OnInit {
  experienciaLaboral: ExperienciaLaboral = null!;

  constructor(private experienciaLaboralService: ExperienciaLaboralService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaLaboralService.detail(id).subscribe((data) => {
      this.experienciaLaboral = data;
    })
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaLaboralService.update(id, this.experienciaLaboral).subscribe((data) => console.info(data));
    alert("Experiencia laboral actualizada correctamente");
    this.router.navigate(['']);
  } 
}