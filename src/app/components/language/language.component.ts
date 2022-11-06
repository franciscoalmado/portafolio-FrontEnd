import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  idioma: Idioma[] = []; 

  constructor(private idiomaService: IdiomaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarIdioma();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarIdioma(): void{
    this.idiomaService.list().subscribe((data) =>{
      this.idioma = data;
    })
  } 

  delete(id?: number){
    if(id != undefined){
      this.idiomaService.delete(id).subscribe((data) => console.info(data));
      this.cargarIdioma();
    }
  }
}