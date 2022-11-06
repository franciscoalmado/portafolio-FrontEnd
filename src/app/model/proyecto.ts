export class Proyecto {
    id?: number;
    nombre?: string;
    tecnologias?: string;
    periodo?: string;
    descripcion?: string;

    constructor(nombre: string, tecnologias: string , periodo: string, descripcion: string){
        this.nombre = nombre;
        this.tecnologias = tecnologias;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }
}