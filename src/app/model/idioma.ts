export class Idioma {
    id?: number;
    nombre: string;
    nivelDeIdioma: string;

    constructor(nombre: string, nivelDeIdioma: string){
        this.nombre = nombre;
        this.nivelDeIdioma = nivelDeIdioma;
    }
}