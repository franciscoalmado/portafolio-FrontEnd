import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({ 
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  listTechs: any[] = [];
  nombre: string = "";
  porcentaje: number = 0;
  skillSeleccionada: string = "";
  img: string = "";
  skill: Skill = null!;

  constructor(private skillService: SkillService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    this.cargarTecnologias();
  }

  onCreate(){
    this.img = this.skill.img;

    const skill = new Skill(this.img, this.porcentaje);

    this.skillService.save(skill).subscribe((data) => console.info(data));
    alert("Skill agregada correctamente");
    this.router.navigate(['']);
  }

  cargarTecnologias(): void{
    this.listTechs = this.skillService.getTechs();
  }

  getTechsValue(tech: any){
    this.nombre = tech;
  }

  uploadImage($event: any){
    const name = "skill_" + this.nombre;
    this.imageService.uploadImage($event, name);
    this.skill.img = this.imageService.url;
  }
}