import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
}) 
export class EditAboutMeComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService) { }
  persona: Persona = null!;
  
  ngOnInit(): void {  
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data =>{
      this.persona = data;
    }, err =>{
      alert("No se pudo actualizar los datos");
      this.router.navigate(['']);
    })
  } 

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe((data) => console.info(data));
      this.persona.img = this.imageService.url;
      alert("Perfil actualizado correctamente");
      this.router.navigate(['']);
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }
} 