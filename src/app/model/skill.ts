export class Skill {
    id?: number;
    nombre?: string;
    img:string;
    porcentaje: number;

    constructor(img: string, porcentaje: number){
        this.img = img;
        this.porcentaje = porcentaje;
    }
}