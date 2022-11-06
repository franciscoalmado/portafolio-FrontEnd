import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css'],
})
export class NewProyectComponent implements OnInit {
  nombre: string = "";
  tecnologias: string = "";
  periodo: string = "";
  descripcion: string = "";
  listTechs: any[] = [];
  tecnologiasSeleccionadas: any[] = [];

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarTecnologias();
  }

  onCreate(): void{

    const proyecto = new Proyecto(this.nombre, this.tecnologias, this.periodo, this.descripcion);

    this.proyectoService.save(proyecto).subscribe((data) => console.info(data));
    alert("Proyecto agregado correctamente");
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