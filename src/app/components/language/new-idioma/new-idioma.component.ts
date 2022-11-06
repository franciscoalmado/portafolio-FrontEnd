import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-new-idioma',
  templateUrl: './new-idioma.component.html',
  styleUrls: ['./new-idioma.component.css']
}) 
export class NewIdiomaComponent implements OnInit {
  nombre: string = "";
  nivelDeIdioma: string = "";
  idiomaSeleccionado: any[] = [];
  listIdiomas: any[] = [];
  nivelSeleccionado: any[] = [];
  listNivelDeIdiomas: any[] = []; 

  constructor(private idiomaService: IdiomaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarIdiomas();
    this.cargarNivelesDeIdiomas();
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

  onCreate(): void{
    const idioma = new Idioma(this.nombre, this.nivelDeIdioma);

    this.idiomaService.save(idioma).subscribe((data) => console.info(data));
    alert("Idioma agregado correctamente");
    this.router.navigate(['']);
  }
}