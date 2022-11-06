import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {
  proyecto: Proyecto = null!;
  tecnologias: string = ""; 
  listTechs: any[] = [];
  tecnologiasSeleccionadas: any[] = [];

  constructor(private proyectoService: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cargarTecnologias();
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(data =>{
      this.proyecto = data;
    }, err => {
      this.router.navigate(['']);
    })
  }
 
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];

    this.proyectoService.update(id, this.proyecto).subscribe((data) => console.info(data));
    alert("Proyecto actualizado correctamente");
    this.router.navigate(['']);
  }

  cargarTecnologias(): void{
    this.listTechs = this.proyectoService.getTechs();
  }

  getTechsValue(tech: any[]){
    this.tecnologiasSeleccionadas.push(tech); 
    this.tecnologias = this.tecnologiasSeleccionadas.toString();
  }
}