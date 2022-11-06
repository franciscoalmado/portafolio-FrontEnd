import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  listTechs: any[] = [];
  nombre: string = "";
  porcentaje: number = 0;
  skillSeleccionada: string = "";
  img: string = "";
  skill: Skill = null!;
  
  constructor(private skillService: SkillService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    this.cargarTecnologias();
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(data =>{
      this.skill = data;
    })
  }

  onUpdate(){
    this.img = this.skill.img;
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe((data) => console.info(data));
    alert("Skill actualizada correctamente");
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