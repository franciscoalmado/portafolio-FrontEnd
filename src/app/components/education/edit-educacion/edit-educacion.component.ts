import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/service/educacion-service.service';

@Component({ 
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'] 
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null!;
  
  constructor(private educacionService: EducacionServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe((data) =>{
      this.educacion = data;
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe((data) => console.info(data));
    alert("Educación actualizada correctamente");
    this.router.navigate(['']);
  } 
} 