export class ExperienciaLaboral {
    id?: number;
    empresa?: string;
    cargo?: string;
    periodo?: string;
    funciones?: string;

    constructor(empresa: string, cargo: string, periodo: string, funciones: string){
        this.empresa = empresa;
        this.cargo = cargo;
        this.periodo = periodo;
        this.funciones = funciones;
    }
}