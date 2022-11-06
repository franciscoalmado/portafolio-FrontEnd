export class Educacion {
    id?: number;
    institucion: string;
    carrera: string;
    periodo: string;
    comentarios: string;

    constructor(institucion: string, carrera: string, periodo: string, comentarios: string){
        this.institucion = institucion;
        this.carrera = carrera;
        this.periodo = periodo;
        this.comentarios = comentarios;
    }
}