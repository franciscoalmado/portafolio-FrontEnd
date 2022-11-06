import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-edit-idioma',
  templateUrl: './edit-idioma.component.html',
  styleUrls: ['./edit-idioma.component.css']
})
export class EditIdiomaComponent implements OnInit {
  idioma: Idioma = null!;
  nombre: string = "";
  nivelDeIdioma: string = "";
  idiomaSeleccionado: any[] = [];
  listIdiomas: any[] = [];
  nivelSeleccionado: any[] = [];
  listNivelDeIdiomas: any[] = []; 
  
  constructor(private idiomaService: IdiomaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cargarIdiomas();
    this.cargarNivelesDeIdiomas();

    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomaService.detail(id).subscribe(data =>{
      this.idioma = data;
    }, err =>{
      alert("No se pudo actualizar el idioma");
      this.router.navigate(['']);
    })
  }

  cargarIdiomas(): void{
    this.listIdiomas = this.idiomaService.getIdiomas();
  }

  cargarNivelesDeIdiomas(): void{
    this.listNivelDeIdiomas = this.idiomaService.getNivelesDeIdiomas();
  }

  getIdiomas(idioma: any[]){
    this.idiomaSeleccionado.push(idioma); 
    this.nombre = this.idiomaSeleccionado.toString();
  }

  getNiveles(nivel: any[]){
    this.nivelSeleccionado.push(nivel);
    this.nivelDeIdioma = this.nivelSeleccionado.toString();
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomaService.update(id, this.idioma).subscribe((data) => console.info(data));
    alert("Idioma actualizado correctamente");
    this.router.navigate(['']);
  }
}